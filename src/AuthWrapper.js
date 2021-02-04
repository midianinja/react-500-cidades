import React, { useEffect, useContext } from 'react';
import Store from './store/Store';
import { useHistory } from 'react-router-dom';
import apollo from './service/apollo';
import { allUsersQuery, oneUserQuery } from './queries/queries';
import idaLib from './service/ida.lib';

const verifyAuth = async (auth, dispatch, history) => {
  if (!auth) return;
  try {
  console.log('🚀 ~ file: AuthWrapper.js ~ line 11 ~ verifyAuth ~ auth', auth);
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
    console.log('🚀 ~ file: AuthWrapper.js ~ line 25 ~ verifyAuth ~ user', user);
    if (!user.data.oneUser) {
      history.push('/cadastre-se');
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
            data: result.data.allUsers.filter(el => Object.values(el).some(x => x == null) === false),
        });
        dispatch({
            type: 'SET_LOADING',
            data: false,
        })
    })
   }, []);
  return (
    <div>
      {children}
    </div>
  );
}

export default AuthWrapper;
