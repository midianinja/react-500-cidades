import React, { useEffect, useCallback, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../../components/ToggleButton';
import pin from '../../assets/marcador-oportunidade.svg';
import { FaSearch } from "react-icons/fa";
import './styles.css';
import Store from '../../store/Store';
import NavigationBar from '../../components/NavigationBar';


const UserMap = () => {
  const { state } = useContext(Store);
  const searchInputRef = useRef(null);
  const mapRef = useRef(null);
  const brazilBounds = {
    north: -73.9872354804, south: -33.7683777809, west: -34.7299934555, east: 5.24448639569
  }

  const initMap = useCallback(() => {
    mapRef.current = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -23.543095, lng: -46.627235 },
      zoom: 12,
      restriction: {
        latLngBounds: brazilBounds,
        strictBounds: false
      },
      mapTypeControl: false,
      streetViewControl: false
    });

    let infoWindow = new window.google.maps.InfoWindow();
    state.allusers.map(agent => {
      const marker = new window.google.maps.Marker({
        position: { lat: agent.address.latitude, lng: agent.address.longitude },
        icon: pin,
        map: mapRef.current
      });

      return marker.addListener('click', () => {
        const skill = agent.skills.map((skill, index) => `<div class='agent-skills-item' id=${index}>${skill}</div>`).join('');
        infoWindow.setContent(`
          <div class='info-window'>
            <div class='agent-info'>
              <div class='userinfo'>
                <img
                  class='user-info--img'
                  alt="user-photo"
                  src=${agent.profile_image.mimified}
                >
              </div>
              <div>
                <p class='agent-info--text1'>${agent.name}</p>
                <p class='agent-info--text2'>${agent.address.city} / ${agent.address.state}</p>
                <p class='agent-info--text3'>${agent.job}</p>
              </div>
            </div>
            <div class='agent-skills'>${skill}</div>
            <a href="#" class='agent-plus'>Ver Mais</a>
          </div>`
        )
        return infoWindow.open(mapRef.current, marker)
      })
    });

    const autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current);
    autocomplete.bindTo('bounds', mapRef.current);
    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert(`Não foi possível encontrar ${place.name}`);
        return;
      }
      if (place.geometry.viewport) {
        mapRef.current.fitBounds(place.geometry.viewport);
      } else {
        mapRef.current.setCenter(place.geometry.location);
        mapRef.current.setZoom(17);
      }
    });
  }, [state, brazilBounds])

  const loadMap = useCallback((url) => {
    const scripts = window.document.getElementsByTagName('script')[0]
    const newScript = document.createElement('script')
    newScript.src = url
    newScript.async = true
    newScript.defer = true
    scripts.parentNode.insertBefore(newScript, scripts)
  }, [])

  const renderMap = useCallback(() => {
    loadMap(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&libraries=places&region=BR&callback=initMap`);
    window.initMap = initMap;
  }, [initMap, loadMap]);

  useEffect(() => {
    renderMap();
  }, [renderMap]);

  return (
    <>
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
              className='input-container--search'
            />
            <span className='input-container--icon'><FaSearch size={20} color="#888" /></span>
          </div>
        </div>
        <div className="map-toggles">
          <Link to="/mapa">
            <ToggleButton className="btn-toggle-map--blue">Mapa</ToggleButton>
          </Link>
          <Link to="/userlist">
            <ToggleButton className="btn-toggle-map">Lista</ToggleButton>
          </Link>
        </div>
        <div id='map' className='map-display'></div>
      </div>
    </>
  )
}

export default UserMap;
