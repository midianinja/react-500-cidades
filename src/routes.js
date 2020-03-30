import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Register from './pages/Register/index';
import Profile from './pages/Profile/index';
import UserList from './pages/UserList/index';
import UserMap from './pages/UserMap/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/userlist" component={UserList} />
                <Route path="/usermap" component={UserMap} />
            </Switch>
        </BrowserRouter>
    );
}