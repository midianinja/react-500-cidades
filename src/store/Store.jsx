/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  toast: { show: false, msg: '' },
  auth: null,
  user: null,
  allusers: [],
  loading: true,
  profile: false,
  menu:false,
  preRegisterId: '',
  loginModal: false,
  registerModal: false,
};

export const reducer = (state, action) => {
  const cases = {
    SHOW_TOAST: (oldState, data) => ({ ...oldState, toast: { show: true, ...data.data } }),
    HIDE_TOAST: (oldState, data) => ({ ...oldState, toast: initialState.toast }),
    SET_ALL_USERS: (oldState, data) => ({ ...oldState, allusers: action.data }),
    SET_LOADING: (oldState, data) => ({ ...oldState, loading: action.data }),
    SHOW_PROFILE:(oldState, data) => ({ ...oldState, profile:action.data }),
    HIDE_PROFILE:(oldState, data) => ({ ...oldState, profile:initialState.profile }),
    TOGGLE_MENU:(oldState, data) => ({ ...oldState, menu:action.data }),
    TOGGLE_LOGIN_MODAL:(oldState, data) => ({ ...oldState, loginModal: action.data }),
    TOGGLE_REGISTER_MODAL:(oldState, data) => ({ ...oldState, registerModal: action.data }),
    SET_PRE_REGISTER_ID:(oldState, data) => ({ ...oldState, preRegisterId: action.data }),
    SET_USER:(oldState, data) => ({ ...oldState, user: action.data }),
    SET_AUTH:(oldState, data) => ({ ...oldState, auth: action.data }),
  };
  return cases[action.type] ? cases[action.type](state, action) : state;

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
