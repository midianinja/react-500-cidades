import React, { useContext } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import LogoImg from '../../assets/500cidades-logo-nav.png';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';
import {
    NavContainer, HeaderContainer, SignInButton, CreateAccountButton,
    RegistrationField, UserProfileImage, SignOutButton, BrandImage,
  } from './navigationBar.styled';

  const renderAuthSide = (history, state) => (
    <ul>
        <li>
        <SignInButton
            onClick={() => openIDASignin(state.ida)} 
        >
            Já tenho cadastro
        </SignInButton>
        </li>
        <li>
            <CreateAccountButton
                children="Cancelar"
                onClick={() => openIDASignin(state.ida)} 
            >
                Quero conhecer!
            </CreateAccountButton>
        </li>
        <RegistrationField /> 
    </ul>
)

const renderLoggedSide = (history, state, dispatch) => (
    <ul>
        <li>
            <UserProfileImage
                src={state.user ? state.user.profile_image.mimified : ''}
                alt="Imagem de perfil"
                onClick={() => {
                    history.push('/landing/?page=editar');
                    dispatch({
                        type: 'OPEN_MODAL',
                        modal: 'edit',
                    });
                }}
            />
        </li>
        <li>
        <SignOutButton
            onClick={() => {
                history.push('/landing/?page=landing');
                state.ida.logout()
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
        </SignOutButton>
        </li>
        <RegistrationField /> 
    </ul>
)

const NavigationBar = ({ history })  => {
    const { state, dispatch } = useContext(Store);
    return (
        <NavContainer>
            <HeaderContainer>
                <ul>
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
                <RegistrationField />
                </ul>
                <BrandImage
                    onClick={() => {
                        history.push('/mapa/?page=landing');
                        dispatch({ type: 'OPEN_MODAL', modal: 'landing'})
                    }}
                    src={LogoImg}
                    alt="Logo 500 cidades"
                />
                {state.auth ? renderLoggedSide(history, state, dispatch) : renderAuthSide(history, state)}
            </HeaderContainer>
        </NavContainer>
    );
}

export default withRouter(NavigationBar);