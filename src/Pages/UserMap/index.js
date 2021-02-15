import React, { useEffect, useCallback, useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../../components/ToggleButton';
import { FaSearch } from "react-icons/fa";
import './styles.css';
import Store from '../../store/Store';
import NavigationBar from '../../components/NavigationBar';
import ShowProfile from '../../components/ShowProfile';
import { startMap, fetchAutocomplete, insertPins } from './controller';
import SamePlaceListModal from '../../components/SamePlaceListModal/SamePlaceListModal';
import MapComponent from '../../components/Map/Map';


const UserMap = () => {
  const { state, dispatch } = useContext(Store);
  const [samePlaceList, setSamePlaceList] = useState([]);

  return (
    <>
      <SamePlaceListModal
        users={samePlaceList}
        openUser={(usr) => {
          dispatch({ type: 'SHOW_PROFILE', data: usr.id });
          setSamePlaceList([]);
        }}
        onClose={() => setSamePlaceList([])}
      />
      <NavigationBar />
      <div className='map-container'>
        <div className="map-toggles">
          <Link to="/" onClick={() => dispatch({ type: 'CLOSE_MODAL', modal: 'llist' })}>
            <ToggleButton className="btn-toggle-map--blue">Mapa</ToggleButton>
          </Link>
          <Link to="/?page=lista" onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'llist' })}>
            <ToggleButton className="btn-toggle-map">Lista</ToggleButton>
          </Link>
        </div>
        <MapComponent showMore showInput />
      </div>
      {state.allusers.map((user) => <button className="hide" id={user.id} onClick={() => dispatch({ type: 'SHOW_PROFILE', data: user.id })}></button>)}
      <ShowProfile />
    </>
  )
}

export default UserMap;
