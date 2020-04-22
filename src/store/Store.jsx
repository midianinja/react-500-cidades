/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  toast: { show: false, msg: '' },
  auth: {
    name: 'Fulano',
    sobrenome: 'Fulano',
  }
};

export const reducer = (state, action) => {
  const cases = {
    SHOW_TOAST: (oldState, data) => ({ ...oldState, toast: { show: true, msg: data.data }}),
    HIDE_TOAST: (oldState, data) => ({ ...oldState, toast: initialState.toast })
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
