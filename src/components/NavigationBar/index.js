import React from 'react';
import { NavLink } from "react-router-dom";
import LogoImg from '../../assets/500cidades-logo-nav.png';
import './styles.css';

const NavigationBar = ()  => {
    return (
        <nav className="nav-container">
            <img className="nav-img" src={LogoImg} alt="Logo 500 cidades" />
            <ul>
                <li>
                <NavLink to="/">
                    Sobre
                </NavLink>
                </li>
                <li>
                <NavLink to="/usuario/mapa">
                    Mapa
                </NavLink>
                </li>
                <div className="registration-field"> 
                </div>
            </ul>
        </nav>
    );
}

export default NavigationBar;