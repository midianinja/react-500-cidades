import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from '../components/primary-button/PrimaryButton';
import createAccountFieldset from './components/CreateAccountFieldset';
import emailFieldset from './components/EmailFieldset';
import phoneFieldset from './components/PhoneFieldset';
import selectConfirmationMathodFieldset from './components/SelectConfirmationMathodFieldset';
import sentEmailFieldset from './components/SentEmailFieldset';
import sentPhoneFieldset from './components/SentPhoneFieldset';
import {
  usernameValidation, passwordValidation, getPasswordPoint,
  phoneValidation, emailValidation,
} from './validations';
import {
  createAccount, generatePhoneCodeSubmit, validatePhoneCodeSubmit,
  sendConfirmationEmail,
} from './controller';
import { purple, black50, white50, white } from '../settings/colors';
import Store from '../../../store/Store';
import Loading from '../components/loading/Loading';
import { useEffect } from 'react';

const filterNumbers = (value) =>  value.replace(/\D/g, "");


const RegisterWrapper = styled.section`
  display: ${(props) => {
    const { isOpen } = props;
    return !isOpen ? 'none' : 'flex';
  }};
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 30px;
  background-color: ${black50};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 15px 30px 15px;
  background-color: ${purple};
  border-radius: 20px;
`;

const ExitWrapper = styled.div`
  text-align: right;
`;

const ExitIcon = styled.img`
  width: 22px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
`;

const Fieldset = styled.div`
  min-height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Actions = styled.div`
  width: 100%;
  display: ${(props) => {
    const { hide } = props;
    return hide ? 'none' : 'flex';
  }};
  justify-content: space-between;
  align-items: center;
`;

export const MakeLogin = styled.a`
  text-decoration: none;
  color: ${white50};
  font-size: 0.7142857143em;
  font-weight: 300;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  :not([href]) {
    color: ${white};
  }
`;


function Register({ history, emailPreSet, phonePreSet }) {
  const { state, dispatch } = useContext(Store);
  const [ida, setIDA] = useState('');
  const [token, setToken] = useState('');
  const [step, setStep] = useState('account');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [method, setMethod] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(emailPreSet);
  }, [emailPreSet]);
  useEffect(() => {
    passwordValidation(password);
  }, [password]);
  useEffect(() => {
    setPhone(phonePreSet);
  }, [phonePreSet]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    const regex = /^[a-zA-Z0-9]{1,}$/;
    let message = null;
    if (!e.target.value) {
      message = 'Preencha o campo username';
    } else if (!regex.test(e.target.value)) {
      message = 'Ultilize apenas caracteres do alfabeto e numerais';
    }

    setError({ ...error, username: message });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const point = getPasswordPoint(e.target.value);
    let message = '';
    if (point <= 0) message = '';
    else if (point < 60) message = 'Senha fraca';
    else if (point < 90) message = 'Senha razoável';
    else if (point >= 90) message = 'Senha forte';

    setError({ ...error, password: message });
  };

  const handlePhoneChange = (e) => {
    setPhone(filterNumbers(e.target.value));
    if (!phoneValidation(filterNumbers(e.target.value))) {
      setError({ ...error, phone: 'Número inválido. Ex: (11) 99999-9999' });
    } else {
      setError({ ...error, phone: null });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'TOGGLE_REGISTER_MODAL' });
  };

  const handleCodeChange = (inputCode) => {
    if (inputCode.length > 6) {
      return;
    }

    if (inputCode.length === 6) {
      validatePhoneCodeSubmit({
        ida, code: inputCode, setError, navigationTo: history.push, token,
        closeModal, dispatch, setLoading,
      });
    }

    setCode(inputCode);
  };

  const fields = {
    account: {
      render: () => (
        step === 'account' ? createAccountFieldset(
          username, handleUsernameChange, password, handlePasswordChange, error,
        ) : null),
      prev: null,
      next: 'methods',
      validation: () => (
        usernameValidation(username) && passwordValidation(password)
      ),
      submit: createAccount,
    },
    email: {
      render: () => emailFieldset(email, setEmail, error),
      validation: () => emailValidation(email),
      submit: sendConfirmationEmail,
      prev: 'methods',
      next: 'sentEmail',
    },
    phone: {
      render: () => phoneFieldset(phone, handlePhoneChange, error),
      validation: () => phoneValidation(phone),
      next: 'sentPhone',
      prev: 'methods',
      submit: generatePhoneCodeSubmit,
    },
    methods: {
      render: () => selectConfirmationMathodFieldset(method, setMethod, error),
      validation: () => true,
      prev: 'account',
      next: method === 'phone' ? 'phone' : 'email',
    },
    sentEmail: {
      render: () => sentEmailFieldset(() => setStep('email'), closeModal),
      validation: () => true,
    },
    sentPhone: {
      render: () => sentPhoneFieldset(code, handleCodeChange, () => setStep('phone'), error, loading),
      validation: () => code.length === 6,
      prev: 'phone',
      submit: validatePhoneCodeSubmit,
    },
  };

  const data = {
    ida, step, username, password, email, phone, code, method, error,
    setIDA, setStep, setUsername, setPassword, setEmail, setPhone, setCode, setMethod, setError,
    token, setToken, dispatch, loading, setLoading,
  };
  const field = fields[step];
  return (
    <RegisterWrapper id="register" isOpen={state.registerModal}>
      <Container>
        <ExitWrapper>
          <ExitIcon
            onClick={() => {
              if (field.prev) setStep(field.prev);
              else closeModal();
            }}
            src="/icons/arrow_forward_left.svg"
          />
        </ExitWrapper>
        <Form
          autocomplete="new-password"
          onSubmit={(e) => {
            e.preventDefault();
            const { submit, next } = field;
            return submit ? submit(data, state) : setStep(next);
          }}
        >
          <Fieldset>
            {field.render()}
          </Fieldset>
          <Actions hide={!field.next}>
            {
              loading ? (
                <Loading />
              ) : (
                <PrimaryButton
                  color="white"
                  type="submit"
                  disabled={!field.validation()}
                >
                  Próximo
                </PrimaryButton>
              )
            }
          </Actions>
        </Form>
        <MakeLogin
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'TOGGLE_REGISTER_MODAL',
              data: false,
            });
            dispatch({
              type: 'TOGGLE_LOGIN_MODAL',
              data: true,
            });
          }}
        >
          Ou faça login
        </MakeLogin>
      </Container>
    </RegisterWrapper>
  );
}

const historyShape = {
  push: PropTypes.func,
};

Register.propTypes = {
  history: PropTypes.shape(historyShape).isRequired,
};

export default withRouter(Register);
