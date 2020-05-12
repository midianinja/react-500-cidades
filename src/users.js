import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from './Pages/UserList';
import UserMap from './Pages/UserMap';
import Store from '../src/store/Store'
import apollo from './service/apollo';
import { allUsersQuery } from './queries/queries'

export default function UserRoutes() {
    const { dispatch } = useContext(Store);

    useEffect(() => {
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

    }, [dispatch]);


    return (
        <Route path="/usuario">
            <Switch>
                <Route path="/usuario/lista-de-agentes" component={UserList} />
                <Route path="/usuario/mapa" component={UserMap} />
            </Switch>
        </Route>
    );

}