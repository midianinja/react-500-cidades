import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Snackbar from './components/Snackbar';
// import Profile from './Pages/Profile';
import UserList from './Pages/UserList';
import UserMap from './Pages/UserMap';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" component={Register} />
                {/* <Route path="/profile" component={Profile} /> */}
                <Route path="/userlist" component={UserList} />
                <Route path="/mapa" component={UserMap} />
            </Switch>
            <Snackbar />
        </BrowserRouter>
    );
}