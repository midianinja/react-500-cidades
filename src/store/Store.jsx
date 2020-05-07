/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  toast: { show: false, msg: '' },
  auth: {
    name: 'Fulano',
    sobrenome: 'Fulano',
  },
  allusers: [],
  loading: true,
  profile: false,
};

export const reducer = (state, action) => {
  const cases = {
    SHOW_TOAST: (oldState, data) => ({ ...oldState, toast: { show: true, msg: data.data } }),
    HIDE_TOAST: (oldState, data) => ({ ...oldState, toast: initialState.toast }),
    SET_ALL_USERS: (oldState, data) => ({ ...oldState, allusers: action.data }),
    SET_LOADING: (oldState, data) => ({ ...oldState, loading: action.data }),
    SHOW_PROFILE:(oldState, data) => ({ ...oldState, profile:action.data }),
    HIDE_PROFILE:(oldState, data) => ({ ...oldState, profile:initialState.profile })
  };
  return cases[action.type](state, action);

};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object.isRequired,
};

StoreProvider.defaultProps = {
  children: [],
};

export default Store;
