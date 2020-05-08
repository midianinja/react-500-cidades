import React from 'react';
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

import BurgerIcon from '../BurgerIcon';

import './styles.css';

const Menu = ({ close })  => {
const containerModal = {
  border: "none",
  position: 'relative',
  background: 'rgb(59, 39, 55)',
  width: '50%',
};
    return (
      <Popup
        modal
        overlayStyle={{ background: "rgb(59, 39, 55)" }}
        contentStyle={containerModal}
        closeOnDocumentClick={false}
        trigger={(open) => <BurgerIcon open={open} />}
      >
        {(close) => <Menu close={close} />}
        <nav>
          <div className="menu">
            <ul>
              <li>
                <NavLink onClick={close} activeClassName="current" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={close}
                  activeClassName="current"
                  to="/register"
                >
                  Cadastre-se
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={close}
                  activeClassName="current"
                  to="/users/lista-de-agentes"
                >
                  Lista
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Popup>
    );
}

export default Menu;