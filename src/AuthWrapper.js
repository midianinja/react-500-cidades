import React, { useEffect, useContext } from 'react';
import Store from './store/Store';
import { useHistory } from 'react-router-dom';
import apollo from './service/apollo';
import { oneUserQuery } from './queries/queries';
import idaLib from './service/ida.lib';

const verifyAuth = async (auth, dispatch, history) => {
console.log('🚀 ~ file: AuthWrapper.js ~ line 9 ~ verifyAuth ~ auth', auth);
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
    console.log('🚀 ~ file: AuthWrapper.js ~ line 19 ~ verifyAuth ~ user', user);
    dispatch({
      type: 'SET_AUTH',
      data: auth,
    });
    if (!user.data.oneUser) {
      history.push('/cadastre-se');
      return;
    }

    dispatch({
      type: 'SET_USER',
      data: user.data.oneUser,
    });
  } catch (err) {
    console.log('🚀 ~ file: AuthWrapper.js ~ line 41 ~ verifyAuth ~ err', err);
  }
}

/**
 * open iniIda signin pop and resolve possible errors if
 */
const initIda = async (
  dispatch, history,
) => {
  console.log('initIda');
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
   }, []);
  // useEffect(() => {
  //   verifyAuth(state, dispatch)
  // })
  return (
    <div>
      {children}
    </div>
  );
}

export default AuthWrapper;
