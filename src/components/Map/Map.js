import React, { useEffect, useCallback, useRef, useContext, useState, Children } from 'react';
import { FaSearch } from "react-icons/fa";
import './styles.css';
import Store from '../../store/Store';
import { startMap, insertPins, fetchAutocomplete } from './mapController';
import {
  MapComponent,
  InputContainer,
  Input,
  Icon,
  Container
} from './map.style';
import { withRouter } from 'react-router-dom';


const Map = ({ children, showMore, showInput, location }) => {
  const { state, dispatch } = useContext(Store);
  const [loadedMap, setLoadedMap] = useState(null)
  const [autocomplete, setAutocomplete] = useState();


  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  
  const loadMap = useCallback((url) => {
    const scripts = window.document.getElementsByTagName('script')[0];
    const newScript = document.createElement('script');
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    scripts.parentNode.insertBefore(newScript, scripts);
    setLoadedMap(true);
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
    if(!state.loadedMap) {
      loadMap(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&libraries=places&region=BR&callback=initMap`);
      window.initMap = () => {startMap({ state, mapRef, showMore, setAutocomplete, searchInputRef })};
      dispatch({
        type: 'LOAD_MAP',
        data: true
      });
    }
  }, [loadMap, state]);
  const renderPins = useCallback(() => {
    loadMarkerCluster(`https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js`);
  }, [loadMarkerCluster]);
  useEffect(() => {
    if (showMore && autocomplete) fetchAutocomplete({ autocomplete, searchInputRef, mapRef, dispatch });
  }, [autocomplete, dispatch]);


  useEffect(() => {
    if(!loadedMap) renderMap();
  }, [mapRef, renderMap]);
  useEffect(() => {
    if(mapRef.current) renderPins();
  }, [mapRef, renderPins]);

  useEffect(() => {
    if(state.allusers && mapRef.current) insertPins({ allusers: state.allusers, mapRef})
  }, [state.allusers]);


  return (
    <>
      <Container>
        {
          showInput ? (
            <InputContainer>
              <Input
                name='search'
                ref={searchInputRef}
                type='text'
                placeholder='Procurar...'
                id='search'
                // className={`input-container--search ${searchFocus ? 'input-active' : ''}`}
                // onFocus={() => setSearchFocus(true)}
                // onBlur={() => setSearchFocus(false)}
              />
              <Icon className='input-container--icon'><FaSearch size={20} color="#888" /></Icon>
            </InputContainer>
          ) : null
        }
        <MapComponent id='map-component' ref={mapRef}>
          {children}
        </MapComponent>
      </Container>
   </>
  )
}

export default withRouter(Map);
