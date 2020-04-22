import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Pages/Landing';
import Register from './Pages/Register';
// import Profile from './Pages/Profile';
import UserList from './Pages/UserList';
// import UserMap from './Pages/UserMap';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" component={Register} />
                {/* <Route path="/profile" component={Profile} /> */}
                <Route path="/userlist" component={UserList} />
                {/* <Route path="/usermap" component={UserMap} /> */}
            </Switch>
        </BrowserRouter>
    );
}