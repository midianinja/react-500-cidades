import React, { useContext } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import LogoImg from '../../assets/500cidades-logo-nav.png';
import MenuIcon from '../../assets/icons/menu.svg';
import Store from '../../store/Store';
import './styles.css';


const Menu = ({ history }) => {
  const { state, dispatch } = useContext(Store);

  if (!state.menu) return (
    <img
      className="toggle-icon"
      open={state.menu}
      alt="Abrir menu"
      src={MenuIcon}
      onClick={() => dispatch({ type: 'TOGGLE_MENU', data: !state.menu })}
    />
  )

  return (
    <div className="wrapper">
      <img
        alt="Fechar menu"
        className="toggle-icon"
        open={state.menu}
        src="/icons/close.svg"
        onClick={() => dispatch({ type: 'TOGGLE_MENU', data: !state.menu })}
      />
      <nav>
        <div className="menu">
          <ul>
            <li>                
              <img
                    onClick={() => {
                        history.push('/mapa/?page=landing');
                        dispatch({ type: 'OPEN_MODAL', modal: 'landing'})
                    }}
                    src={LogoImg}
                    alt="Logo 500 cidades"
                />
            </li>
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
            <li>
              <NavLink
                onClick={(e) => {
                  e.preventDefault()
                  dispatch({ type: 'TOGGLE_MENU', data: !state.menu })
                  history.push('/?page=cadastre-se');
                  dispatch({ type: 'OPEN_MODAL', modal: 'register' })
                }}
                activeClassName="current"
                to="/cadastre-se"
              >
                Cadastre-se
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Menu);