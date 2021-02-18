import React, { useContext } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import LogoImg from '../../assets/500cidades-logo-nav.png';
import Store from '../../store/Store';
import './styles.css';
import Button from '../Button';
import { openIDASignin } from '../../service/ida.lib';

const renderAuthSide = (history, state) => (
    <ul className="auth-side">
        <li>
        <button
            className="make-login"
            onClick={() => openIDASignin(state.ida)} 
        >
            Já tenho cadastro
        </button>
        </li>
        <li>
            <Button
                children="Cancelar"
                className="btn3D--red create-account"
                onClick={() => openIDASignin(state.ida)} 
            >
                Quero conhecer!
            </Button >
        </li>
        <div className="registration-field"> 
        </div>
    </ul>
)

const renderLoggedSide = (history, state, dispatch) => (
    <ul className="logged-side">
        <li>
            <img
                className="profile-img"
                src={state.user ? state.user.profile_image.mimified : ''}
                alt="Imagem de perfil"
            />
        </li>
        <li>
        <button
            className="make-login"
            onClick={() => {
                history.push('/landing/?page=landing');
                window.localStorage.setItem('500cidades@ida', '');
                window.localStorage.setItem('500cidades@token', '');
                dispatch({
                    type: 'SET_AUTH',
                    data: null,
                });
                dispatch({
                    type: 'SET_USER',
                    data: null,
                });
                dispatch({
                    type: 'OPEN_MODAL',
                    modal: 'Landing',
                });
            }}
        >
            Sair
        </button>
        </li>
        <div className="registration-field"> 
        </div>
    </ul>
)

const NavigationBar = ({ history })  => {
    const { state, dispatch } = useContext(Store);
    console.log('🚀 ~ file: index.js ~ line 73 ~ NavigationBar ~ state', state);
    return (
        <nav className="nav-container">
            <div className="header-container">
                <ul className="no-auth-side">
                    <li>
                    <NavLink onClick={() => dispatch({ type: 'CLOSE_MODAL' })} to="/?">
                        Mapa
                    </NavLink>
                    </li>
                    <li>
                    <NavLink  onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'about' })} to="/?page=about">
                        Sobre o projeto
                    </NavLink>
                    </li>
                    <div className="registration-field"> 
                    </div>
                </ul>
                <img
                    onClick={() => {
                        history.push('/mapa/?page=landing');
                        dispatch({ type: 'OPEN_MODAL', modal: 'landing'})
                    }}
                    className="nav-img"
                    src={LogoImg}
                    alt="Logo 500 cidades"
                />
                {state.auth ? renderLoggedSide(history, state, dispatch) : renderAuthSide(history, state)}
            </div>
        </nav>
    );
}

export default withRouter(NavigationBar);