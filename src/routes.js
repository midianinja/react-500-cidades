import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Pages/Landing/index';
import Register from "./Pages/Register/index";
import Profile from "./Pages/Profile/index";
import UserList from "./Pages/UserList/index";
import UserMap from "./Pages/UserMap/index";

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