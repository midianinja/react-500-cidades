import React, { useEffect, useCallback, useRef, useContext } from 'react';
import './styles.css';
import Store from '../../store/Store';
import { startMap, insertPins } from './mapController';


const Map = () => {
  const { state } = useContext(Store);

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
    console.log('aparece, meu filho!!!', loadMap);
    loadMap(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&libraries=places&region=BR&callback=initMap`);
    window.initMap = () => startMap({ state, mapRef});
  }, [loadMap, state]);
  const renderPins = useCallback(() => {
    loadMarkerCluster(`https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js`);
  }, [loadMarkerCluster]);


  useEffect(() => {
    console.log('mostraaaaaa disgrama!', mapRef);
    if(!mapRef.current) renderMap();
  }, [mapRef, renderMap]);
  useEffect(() => {
    if(!mapRef.current) renderPins();
  }, [mapRef, renderPins]);


  useEffect(() => {
    mapRef.current = document.getElementById('map');
  }, []);
  // useEffect(() => {
  //   if(state.allusers && mapRef.current) insertPins({ allusers: state.allusers, mapRef})
  // }, [state.allusers]);


  return (
    <>
      <div className='map-container'>
        <div id='map' className='map-display' ref={mapRef}></div>
      </div>
   </>
  )
}

export default Map;
