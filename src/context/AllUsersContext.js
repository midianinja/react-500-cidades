import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { allUsersQuery } from "./queries";
import apollo from '../service/apollo';

const AllUsers = createContext();

const INITIAL_STATE = 'INITIAL_STATE'

export const initialState = data => ({
    type:INITIAL_STATE,
    data
})

export const reducer = (state, action) => {
    switch(action.type){
        case INITIAL_STATE:
            return [...action.data]
        default: 
            return state;
    }
  };

export const AllUsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        apollo.query({
            query: allUsersQuery,
            variables: {
                user: {}
            }
        }).then(result => {
            dispatch(initialState(result.data.allUsers.filter(el => Object.values(el).some(x => x == null) === false)))
        })
    
    }, [])

    return <AllUsers.Provider value={{ state, dispatch }}>{children}</AllUsers.Provider>;
  };

  AllUsers.propTypes = {
    children: PropTypes.node,
    value: PropTypes.object.isRequired,
  };
  
  AllUsers.defaultProps = {
    children: [],
  };

  export default AllUsers;

