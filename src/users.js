import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from './Pages/UserList';
import UserMap from './Pages/UserMap';

export default function UserRoutes() {

    return (
        <Route path="/usuario">
            <Switch>
                <Route path="/usuario/lista-de-agentes" component={UserList} />
                <Route path="/usuario/mapa" component={UserMap} />
            </Switch>
        </Route>
    );

}