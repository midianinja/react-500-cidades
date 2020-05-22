import { authorize, getIDA } from './repository';
import apollo from '../../../service/apollo';
import { updateUserMutation } from './mutations';
import oneUserQuery from './queries';

const getError = (err, setError) => {
  const dataError = {};
  if (err.response) {
    const { error } = err.response.data;
    const obj = {
      'user/not-found': () => { dataError.username = 'Usuário não encontrado.'; },
      'user/wrong-password': () => { dataError.password = 'Senha errada.'; },
    };
    const errorAction = obj[error];
    if (!errorAction) dataError.username = 'Erro inesperado.';
    else errorAction();
  } else {
    dataError.username = 'Erro inesperado.';
    dataError.password = 'Erro inesperado.';
  }
  setError(dataError);
}

export async function login(
  username, password, setError, closeModal,
  history, dispatch, state, setLoading,
) {
  try {
    setLoading(true);
    let promise;
    try {
      promise = await authorize(username, password);
      if (!promise) throw new Error(promise);
    } catch (err) {
      getError(err, setError)
      throw err;
    }

    const { data } = promise.data;
    let userIDAPromise;
    try {
      userIDAPromise = await getIDA(data.ida);
    } catch (err) {
      throw err;
    }

    const userIDAResult = userIDAPromise.data;
    let user500Cities;

    if (state.preRegisterId) {
      const myUser = await apollo.mutate({
        mutation: updateUserMutation,
        variables: {
          user_id: state.preRegisterId,
          user: {
            ida_id: data.ida,
          },
        }
      });
      user500Cities = myUser.data.updateUser;
    } else {
      const user = await apollo.query({
        query: oneUserQuery,
        variables: {
          user: {
            ida_id: data.user.ida,
          }
        }
      });
      user500Cities = user.data.oneUser;
    }
  
    dispatch({
      type: 'SET_AUTH',
      data: userIDAResult.data.user,
    });

    dispatch({
      type: 'SET_USER',
      data: user500Cities,
    });
    dispatch({
      type: 'SET_PRE_REGISTER_ID',
      data: null,
    });

    window.localStorage.setItem('500cidades@ida', data.ida);
    window.localStorage.setItem('500cidades@token', data.token);


    setLoading(false);
    dispatch({
      type: 'TOGGLE_LOGIN_MODAL',
      data: false,
    });
    history.push('/usuario/mapa')
  } catch (err) {
    setLoading(false);
    throw err;
  }
}

export const ignore = null;
