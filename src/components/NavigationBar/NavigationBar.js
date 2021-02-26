import React, { useContext } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import LogoImg from '../../assets/500cidades-logo-nav.png';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';
import {
    NavContainer, HeaderContainer, SignInButton, CreateAccountButton,
    NavLinkList, ListItemAlwaysDisplayed, ListItemSometimesHide,
    RegistrationField, UserProfileImage, SignOutButton, BrandImage,
  } from './navigationBar.styled';

  const renderAuthSide = (history, state) => (
    <NavLinkList>
        <ListItemAlwaysDisplayed>
        <SignInButton
            onClick={() => openIDASignin(state.ida)} 
        >
            Já tenho cadastro
        </SignInButton>
        </ListItemAlwaysDisplayed>
        <ListItemAlwaysDisplayed>
            <CreateAccountButton
                children="Cancelar"
                onClick={() => openIDASignin(state.ida)} 
            >
                Quero conhecer!
            </CreateAccountButton>
        </ListItemAlwaysDisplayed>
        <RegistrationField /> 
    </NavLinkList>
)

const renderLoggedSide = (history, state, dispatch) => (
    <NavLinkList>
        <ListItemAlwaysDisplayed>
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
        </ListItemAlwaysDisplayed>
        <ListItemAlwaysDisplayed>
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
        </ListItemAlwaysDisplayed>
        <RegistrationField /> 
    </NavLinkList>
)

const NavigationBar = ({ history })  => {
    const { state, dispatch } = useContext(Store);
    return (
        <NavContainer>
            <HeaderContainer>
                <NavLinkList>
                    <ListItemSometimesHide>
                    <NavLink onClick={() => dispatch({ type: 'CLOSE_MODAL' })} to="/?">
                        Mapa
                    </NavLink>
                    </ListItemSometimesHide>
                    <ListItemSometimesHide>
                    <NavLink  onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'about' })} to="/?page=about">
                        Sobre o projeto
                    </NavLink>
                    </ListItemSometimesHide>
                <RegistrationField />
                </NavLinkList>
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