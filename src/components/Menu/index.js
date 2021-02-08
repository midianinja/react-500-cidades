import React, { useContext } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import Store from '../../store/Store';
import './styles.css';


const Menu = ({ white, history }) => {
  const { state, dispatch } = useContext(Store);

  if (!state.menu) return (
    <img
      className="toggle-icon"
      open={state.menu}
      alt="Abrir menu"
      src={white ? "/icons/menu_white.svg" : "/icons/menu.svg"}
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
              <NavLink
                onClick={(e) => {
                  e.preventDefault()
                  dispatch({ type: 'TOGGLE_MENU', data: !state.menu })
                  history.push('/landing/?page=landing');
                  dispatch({ type: 'OPEN_MODAL', modal: 'landing'});
                }}
                activeClassName="current" to="/">
                Home
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
            <li>
              <NavLink
                onClick={(e) => {
                  e.preventDefault()
                  dispatch({ type: 'TOGGLE_MENU', data: !state.menu });
                  history.push('/?page=lista')
                  dispatch({ type: 'OPEN_MOMDAL', modal: 'list' });
                }}
                activeClassName="current"
                to="/?page=lista"
              >
                Lista
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Menu);