import React, { useEffect, useContext } from 'react';
import Store from './store/Store';
import Axios from 'axios';
import apollo from './service/apollo';
import { oneUserQuery } from './queries/queries';

const verifyAuth = async (state, dispatch) => {
  try {
    if (state.auth && state.user) return;
    
    const ida = window.localStorage.getItem('500cidades@ida');
    const token = window.localStorage.getItem('500cidades@token');

    if (!ida || !token) {}
    
    
    const verification = await Axios.post(
      `${process.env.REACT_APP_IDA_AUTH_API_URI}/validate-token`,
      { token },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      },
    );
    const user = await apollo.query({
      query: oneUserQuery,
      variables: {
        user: {
          ida_id: verification.data.ida,
        },
      },
    });

    dispatch({
      type: 'SET_AUTH',
      data: verification.data,
    });
    dispatch({
      type: 'SET_USER',
      data: user.data.oneUser,
    });
  } catch (err) {
    window.localStorage.setItem('500cidades@ida', '');
    window.localStorage.setItem('500cidades@token', '');
  }
}

function AuthWrapper({ children }) {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    verifyAuth(state, dispatch)
  })
  return (
    <div>
      {children}
    </div>
  );
}

export default AuthWrapper;
