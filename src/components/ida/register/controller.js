import {
  createIDA, generatePhoneCode, validatePhoneCode,
  sendValidationEmail, getIDA,
} from './repository';
import apollo from '../../../service/apollo';
import { updateUserMutation } from './mutations';
import oneUserQuery from './queries';

export async function createAccount({
  username, password, setError, setStep, setIDA, setToken,
  setLoading,
}, state) {
  setLoading(true);
  let promise;
  try {
    promise = await createIDA(username, password);
  } catch (err) {
    const { error } = err.response.data;
    const dataError = {};

    if (error && error === 'auth/duplicated-user') {
      dataError.username = 'Nome de usuário já em uso';
      setError(dataError);
      setLoading(false);
      return;
    }

    setLoading(false);
    throw err;
  }
  const { data } = promise.data;
  try {
    const updatedUser = await apollo.mutate({
      mutation: updateUserMutation,
      variables: {
        user_id: state.preRegisterId,
        user: {
          ida_id: data.ida,
        },
      }
    });
  } catch (err) {
    setLoading(false);
    throw err;
  }

  setLoading(false);
  setIDA(data.ida);
  setToken(data.token);
  setStep('methods');
}

export async function generatePhoneCodeSubmit({
  phone, ida, setStep, setLoading,
}) {
  setLoading(true);
  try {
    await generatePhoneCode(ida, `+55${phone}`);
  } catch (error) {
    setLoading(false);
    throw error;
  }

  setLoading(false);
  setStep('sentPhone');
}

export async function validatePhoneCodeSubmit({
  ida, token, code, setError, navigationTo, closeModal,
  dispatch, setLoading,
}) {
  setLoading(true);
  try {
    await validatePhoneCode(ida, code);
  } catch (error) {
    const dataError = {};
    setError({ ...dataError, code: 'Código inválido' });
    setLoading(false);
    throw error;
  }

  window.localStorage.setItem('500cidades@ida', ida);
  window.localStorage.setItem('500cidades@token', token);

  let userIDAPromise;
  try {
    userIDAPromise = await getIDA(ida);
  } catch (err) {
    setLoading(false);
    throw err;
  }
  const { data } = userIDAPromise.data;
  dispatch({
    type: 'SET_AUTH',
    data: data.user,
  });

  const user = await apollo.query({
    query: oneUserQuery,
    variables: {
      user: {
        ida_id: data.user.ida,
      }
    }
  });
  dispatch({
    type: 'SET_USER',
    data: user.data.oneUser,
  });


  setLoading(false);
  closeModal();
  navigationTo('/usuario/mapa');
}

export async function sendConfirmationEmail({
  ida, email, setError, setStep, setLoading,
}) {
  setLoading(true);
  try {
    await sendValidationEmail(ida, email);
  } catch (err) {
    const { error } = err.response.data;
    const dataError = {};
    if (error && error === 'email/invalid-email') {
      dataError.email = 'Email inválido';
      setError(dataError);
    }

    setLoading(false);
    throw err;
  }

  setLoading(false);
  setStep('sentEmail');
}
