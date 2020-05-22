import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Snackbar from './components/Snackbar';
import LoginModal from './components/ida/login/Login.modal';
import UserRoutes from './users'
import AuthWrapper from './AuthWrapper'


export default function Routes() {
    return (
        <BrowserRouter>
            <AuthWrapper>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/cadastre-se" component={Register} />
                    <UserRoutes />
                </Switch>
                <Snackbar />
                <LoginModal />
            </AuthWrapper>
        </BrowserRouter>
    );
}