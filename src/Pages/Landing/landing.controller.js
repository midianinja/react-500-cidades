import apollo from '../../service/apollo';
import { newsLetterMutation } from './loading.mutations';

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const registerNewsLetter = async (email, dispatch) => {
  try{
    if(!regexEmail.test(email)) {
      return dispatch({
        type: 'SHOW_TOAST',
        data: {
          error: true,
          msg: 'E-mail inválido',
        },
      });
    }
    
    await apollo.mutate({
      mutation: newsLetterMutation,
      variables: {
        user: {
          email,
        }
      }
    });
    dispatch({
      type: 'SHOW_TOAST',
      data: {
        msg: 'E-mail cadastrado!',
      },
    });
  } catch (err) {
    dispatch({
      type: 'SHOW_TOAST',
      data: {
        error: true,
        msg: 'Erro inesperado',
      },
    });
  }
}