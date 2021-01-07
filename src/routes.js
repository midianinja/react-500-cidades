import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import About from './Pages/About';
import PrivacePolice from './Pages/PrivacePolice';
import TermsOfUse from './Pages/TermsOfUse';
import Snackbar from './components/Snackbar';
import LoginModal from './components/ida/login/Login.modal';
import UserRoutes from './users'
import AuthWrapper from './AuthWrapper'
import ValidationEmailToken from './Pages/ValidationEmailToken/ValidationEmailToken';


export default function Routes() {
    return (
        <BrowserRouter>
            <AuthWrapper>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/cadastre-se" component={Register} />
                    <Route path="/sobre" component={About} />
                    <Route path="/politica-de-privacidade" component={PrivacePolice} />
                    <Route path="/termos-de-uso" component={TermsOfUse} />
                    <UserRoutes />
                </Switch>
                <Snackbar />
                <LoginModal />
            </AuthWrapper>
            <Route path="/ativacao/:ida" component={ValidationEmailToken} />
        </BrowserRouter>
    );
}