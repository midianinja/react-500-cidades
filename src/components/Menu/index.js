import React from 'react';
import { NavLink } from "react-router-dom";

import './styles.css';

const Menu = ({ close })  => {
    return (
        <header>
            <nav>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink onClick={close} activeClassName="current" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={close} activeClassName="current" to="/register">
                                Cadastre-se
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={close} activeClassName="current" to="/profile">
                                Perfil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={close} activeClassName="current" to="/userlist">
                                Lista
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Menu;