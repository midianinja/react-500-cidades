import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Snackbar from './components/Snackbar';
// import Profile from './Pages/Profile';
import UserList from './Pages/UserList';
import UserMap from './Pages/UserMap';
import { AllUsersProvider } from './context/AllUsersContext'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/cadastre-se" component={Register} />
                {/* <Route path="/profile" component={Profile} /> */}
                <AllUsersProvider>
                    <Route path="/lista-de-agentes" component={UserList} />
                    <Route path="/mapa" component={UserMap} />
                </AllUsersProvider>
            </Switch>
            <Snackbar />
        </BrowserRouter>
    );
}