import React, { useEffect, useContext } from 'react';
import queryString from 'query-string';
import Store from './store/Store';
import { useHistory } from 'react-router-dom';
import apollo from './service/apollo';
import { allUsersQuery, oneUserQuery } from './queries/queries';
import idaLib from './service/ida.lib';

const verifyAuth = async (auth, dispatch, history) => {
  if (!auth) return;
  try {
    const user = await apollo.query({
      query: oneUserQuery,
      variables: {
        user: {
          ida_id: auth.ida,
        },
      },
    });
    dispatch({
      type: 'SET_AUTH',
      data: auth,
    });
    if (!user.data.oneUser) {
      history.push('/?page=cadastre-se');
      dispatch({
        type: 'OPEN_MODAL',
        modal: 'register'
      });
      return;
    }

    dispatch({
      type: 'SET_USER',
      data: user.data.oneUser,
    });
  } catch (err) {
  }
}

/**
 * open iniIda signin pop and resolve possible errors if
 */
const initIda = async (
  dispatch, history,
) => {
  // const query = `?${router.asPath.split('?')[1 || '']}`;
  const ida = await idaLib({
    onAuthChange: (auth) => {
      verifyAuth(auth, dispatch, history);
    },
  });
  dispatch({
    type: 'SET_IDA',
    data: ida,
  })

  // if (parsedQuery.logout === 'true') await ida.logout();
};

function AuthWrapper({ children }) {
  const { state, dispatch } = useContext(Store);
  const history = useHistory();
  useEffect(() => {
    initIda(dispatch, history);
      apollo.query({
        query: allUsersQuery,
        variables: {
            user: {}
        }
    }).then(result => {
        dispatch({
            type: 'SET_ALL_USERS',
            data: result.data.allUsers,
        });
        dispatch({
            type: 'SET_LOADING',
            data: false,
        })
    })
   }, []);
   useEffect(() => {
    const parsed = queryString.parse(history.location.search);
    if (parsed.page) {
      if (parsed.page === 'landing') dispatch({ type: 'OPEN_MODAL', modal: 'landing' });
      if (parsed.page === 'cadastre-se') dispatch({ type: 'OPEN_MODAL', modal: 'register' })
      if (parsed.page === '') dispatch({ type: 'CLOSE_MODAL' })
      if (parsed.page === 'map') dispatch({ type: 'CLOSE_MODAL' })
      if (parsed.page === 'politica') dispatch({ type: 'OPEN_MODAL', modal: 'privacy' })
      if (parsed.page === 'lista') dispatch({ type: 'OPEN_MODAL', modal: 'list' })
      if (parsed.page === 'sobre') dispatch({ type: 'OPEN_MODAL', modal: 'about' })
      if (parsed.page === 'editar') dispatch({ type: 'OPEN_MODAL', modal: 'edit' })
    } else {
      dispatch({ type: 'CLOSE_MODAL' });
    }
   }, [history.location])
  return (
    <div>
      {children}
    </div>
  );
}

export default AuthWrapper;
