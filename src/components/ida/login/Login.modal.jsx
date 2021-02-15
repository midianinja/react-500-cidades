import React, {
  useState, useContext, useEffect, Fragment,
} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Store from '../../../store/Store';
import InputGroup from '../components/input-group/InputGroup';
import Input from '../components/input/Input';
import CircularButton from '../components/circular-button/CircularButton';
import LinkButton from '../components/link-button/LinkButton';
import Loading from '../components/loading/Loading';
import { login } from './controller';
import {
  LoginWrapper, Container, ExitArrow,
  Icon, Form, Title, inputGroupStyle,
  inputGroupLabelStyle, ForgetPasswordLink,
  Actions, Arrow,
} from './login.modal.style';

const registerAction = (dispatch, history) => {
  dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
  // history.push('/?page=cadastre-se');
}

const forgetPasswordAction = (dispatch) => {
  dispatch({ type: 'SHOW_FORGET_PASSWORD_MODAL' });
}

const LoginModal = ({ history }) => {
  const { state, dispatch } = useContext(Store);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const ida = window.localStorage.getItem('500cidades@ida');
  const token = window.localStorage.getItem('500cidades@token');

  const closeModal = () => {
    dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
  };

  useEffect(() => {
    // if (state.loginModal && ida) {
    //   history.push('/usuario/mapa');
    // }
  }, [state.loginModal, ida, token, history]);

  return (
    <LoginWrapper id="login" isOpen={state.loginModal}>
      <Container>
        <ExitArrow onClick={closeModal} src="/icons/arrow_forward_left.svg" />
        <Icon src="/icons/login.svg" />
        <Form>
          <Title>Bem vinde de volta!</Title>
          <InputGroup
            customStyle={inputGroupStyle}
            customLabelStyle={inputGroupLabelStyle}
            label="Nome de usuário"
            error={error.username}
          >
            <Input
              id="username"
              type="text"
              placeholder=""
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            customStyle={inputGroupStyle}
            customLabelStyle={inputGroupLabelStyle}
            label="Senha"
            error={error.password}
          >
            <Input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <ForgetPasswordLink
              onClick={(e) => {
                e.preventDefault();
                forgetPasswordAction(dispatch);
              }}
            >
              Esqueci minha senha
            </ForgetPasswordLink>
          </InputGroup>
          <Actions>
            {
              loading ? (
                <Loading />
              ) : (
                <Fragment>
                  <CircularButton
                    onClick={(e) => {
                      e.preventDefault();
                      login(
                        username, password, setError, closeModal,
                        history, dispatch, state, setLoading,
                      );
                    }}
                    disabled={!username || !password}
                  >
                    <Arrow src="/icons/arrow_forward_right.svg" />
                  </CircularButton>
                  <LinkButton color="white" type="button" onClick={() => registerAction(dispatch, history)}>
                    Criar conta
                  </LinkButton>
                </Fragment>
              )
            }
          </Actions>
        </Form>
      </Container>
    </LoginWrapper>
  );
}

const historyShape = {
  push: PropTypes.func,
};

LoginModal.propTypes = {
  history: PropTypes.shape(historyShape).isRequired,
};

export default withRouter(LoginModal);
