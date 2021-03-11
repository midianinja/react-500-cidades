import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing/landing';
import Register from './Pages/Register';
import About from './Pages/About';
import PrivacePolice from './Pages/PrivacePolice';
import Snackbar from './components/Snackbar';
import LoginModal from './components/ida/login/Login.modal';
import UserRoutes from './users'
import AuthWrapper from './AuthWrapper'
import ValidationEmailToken from './Pages/ValidationEmailToken/ValidationEmailToken';
import UserList from './Pages/UserList';
import UserMap from './Pages/UserMap';
import Edit from './Pages/Edit';
import Loading from './Pages/loading/loading';


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
                <Landing />
                <UserList />
                <Edit />
                <Loading />
            </AuthWrapper>
        </BrowserRouter>
    );
}