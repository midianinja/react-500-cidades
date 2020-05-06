import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Snackbar from './components/Snackbar';
import UserRoutes from './users'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/cadastre-se" component={Register} />
                <UserRoutes />
            </Switch>
            <Snackbar />
        </BrowserRouter>
    );
}