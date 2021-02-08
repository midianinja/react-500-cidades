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
import UserList from './Pages/UserList';
import UserMap from './Pages/UserMap';


export default function Routes() {
    return (
        <BrowserRouter>
            <AuthWrapper>
                <Route path="*" exact component={UserMap} />
                <Snackbar />
                <LoginModal />
                <About />
                <PrivacePolice />
                <Register />
                <TermsOfUse />
                <Landing />
                <UserList />
            </AuthWrapper>
        </BrowserRouter>
    );
}