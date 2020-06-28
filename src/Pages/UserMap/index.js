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


const UserMap = () => {
  const { state, dispatch } = useContext(Store);
  const [searchFocus, setSearchFocus] = useState(false);
  const [autocomplete, setAutocomplete] = useState();
  const [samePlaceList, setSamePlaceList] = useState([]);

  const searchInputRef = useRef(null);
  const mapRef = useRef(null);
  
  const loadMap = useCallback((url) => {
    const scripts = window.document.getElementsByTagName('script')[0]
    const newScript = document.createElement('script')
    newScript.src = url
    newScript.async = true
    newScript.defer = true
    scripts.parentNode.insertBefore(newScript, scripts)
  }, []);
  
  const loadMarkerCluster = useCallback((url) => {
    const scripts = window.document.getElementsByTagName('script')[0]
    const newScript = document.createElement('script')
    newScript.src = url
    newScript.async = true
    newScript.defer = true
    newScript.crossorigin = true
    scripts.parentNode.insertBefore(newScript, scripts)
  }, []);

  const renderMap = useCallback(() => {
    loadMap(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&libraries=places&region=BR&callback=initMap`);
    window.initMap = () => startMap({ state, mapRef, setAutocomplete, searchInputRef });
  }, [loadMap, state]);
  const renderPins = useCallback(() => {
    loadMarkerCluster(`https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js`);
  }, [loadMarkerCluster]);


  useEffect(() => {
    if(!mapRef.current) renderMap();
  }, [mapRef, renderMap]);
  useEffect(() => {
    if(!mapRef.current) renderPins();
  }, [mapRef, renderPins]);

  useEffect(() => {
    if(state.allusers && mapRef.current) insertPins({ allusers: state.allusers, mapRef, setSamePlaceList })
  }, [state.allusers]);

  useEffect(() => {
    if (autocomplete) fetchAutocomplete({ autocomplete, searchInputRef, mapRef, dispatch });
  }, [autocomplete, dispatch]);

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
        <div className='map-input'>
          <div className='input-container'>
            <input
              name='search'
              ref={searchInputRef}
              type='text'
              placeholder='Procurar...'
              id='search'
              className={`input-container--search ${searchFocus ? 'input-active' : ''}`}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            <span className='input-container--icon'><FaSearch size={20} color="#888" /></span>
          </div>
        </div>
        <div className="map-toggles">
          <Link to="/usuario/mapa">
            <ToggleButton className="btn-toggle-map--blue">Mapa</ToggleButton>
          </Link>
          <Link to="/usuario/lista-de-agentes">
            <ToggleButton className="btn-toggle-map">Lista</ToggleButton>
          </Link>
        </div>
        <div id='map' className='map-display'></div>
      </div>
      {state.allusers.map((user) => <button className="hide" id={user.id} onClick={() => dispatch({ type: 'SHOW_PROFILE', data: user.id })}></button>)}
      <ShowProfile />
    </>
  )
}

export default UserMap;
