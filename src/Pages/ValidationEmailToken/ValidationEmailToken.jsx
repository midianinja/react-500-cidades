import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Store from '../../store/Store';
import { validateToken } from './repository';

function ValidationEmailToken(props) {
  const { dispatch } = useContext(Store);
  const { history, match } = props;
  const { ida } = match.params;
  const token = history.location.search.split('=')[1];
  const validate = async () => {
    let promise;
    try {
      promise = await validateToken(ida, token);
    } catch (err) {
      throw err;
    }

    const response = await promise.json();
    if (response.error) {
      window.localStorage.setItem('500cidades@ida', '');
      window.localStorage.setItem('500cidades@token', '');

      dispatch({ type: 'SET_AUTH', auth: null });
      dispatch({ type: 'SET_USER', user: null });
      dispatch({ type: 'OPEN_MODAL', modal: 'landing' });
      history.push('/?page=landing');
      dispatch({
        type: 'SHOW_TOAST',
        data: {
          error: true,
          msg: 'Erro ao validar e-mail.',
        },
      });

    } else {
      window.localStorage.setItem('500cidades@ida', response.data.ida);
      window.localStorage.setItem('500cidades@token', response.data.sessionToken);
      history.push('/');
      dispatch({ type: 'CLOSE_MODAL' });
      dispatch({
        type: 'SHOW_TOAST',
        data: {
          error: false,
          msg: 'E-mail validado com sucesso!',
        },
      });
    }
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <div />
  );
}

const routerParamsShape = {
  params: PropTypes.string,
};

const historyShape = {
  push: PropTypes.func,
};

ValidationEmailToken.propTypes = {
  match: PropTypes.shape(routerParamsShape).isRequired,
  history: PropTypes.shape(historyShape).isRequired,
};

export default withRouter(ValidationEmailToken);
