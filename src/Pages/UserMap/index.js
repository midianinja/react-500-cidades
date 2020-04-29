import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../UserList/components/ToggleButton'
import pin from '../../assets/marcador-oportunidade.svg';
import { FaSearch } from "react-icons/fa";
import './styles.css';

const agents = [
    {
      id:'794r94h94hg9uh493hg9h', 
      name:'Leo', 
      job: 'Ninja',
      skills: ["Agroecologia", "Animais","Ativismo alimentar","Ativismo PCD","Bem estar","Comunicação"],
      city: 'Brasília', 
      state: 'DF', 
      lat:-15.769786, 
      lng:-47.871361
    },
    {
      id:'794riug7rhg9uh493hg9h', 
      name:'Don', 
      job: 'Ninja',
      skills:["Cultura","Direito à Terra"], 
      city: 'Brasília', 
      state: 'DF', 
      lat:'-15.747978', 
      lng:'-47.871490'
    },
    {
      id:'794rojrngo99uh493hg9h', 
      name:'Raph', 
      job: 'Ninja',
      skills: ["Direitos a Cidade","Direitos Humanos","Economia"], 
      city: 'Brasília', 
      state: 'DF', 
      lat:'-15.766605', 
      lng:'-47.861877'
    }
]

const UserMap = () => {
  const [search, setSearch] = useState('');
  const initMap = useCallback(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat:-15.763178, lng:-47.870717},
      zoom: 12,
      mapTypeControl: false,
      streetViewControl: false
    });
    
    let infoWindow = new window.google.maps.InfoWindow();
    agents.map(agent => {
      const marker = new window.google.maps.Marker({
        position: {lat:parseFloat(agent.lat), lng:parseFloat(agent.lng)}, 
        icon: pin,
        map: map
      });
      return marker.addListener('click', () => {
        const skill = agent.skills.map((skill,index) => `<div class='agent-skills-item' id=${index}>${skill}</div>`).join('');
        infoWindow.setContent(
        `<div class='info-window'>
          <div class='agent-info'>
            <div class='agent-info--img'></div>
            <div>
              <p class='agent-info--text1'>${agent.name}</p>
              <p class='agent-info--text2'>${agent.city} / ${agent.state}</p>
              <p class='agent-info--text3'>${agent.job}</p>
            </div>
          </div>
          <div class='agent-skills'>${skill}</div>
          <a href="#" class='agent-plus'>Ver Mais</a>
        </div>`
      )
        return infoWindow.open(map, marker)
      })
    });
  },[])

  const loadMap = useCallback((url) => {
    const scripts = window.document.getElementsByTagName('script')[0]
    const newScript = document.createElement('script')
    newScript.src = url
    newScript.async = true
    newScript.defer = true
    scripts.parentNode.insertBefore(newScript, scripts)
  }, [])

  const renderMap = useCallback(() => {
    loadMap(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&callback=initMap`);
    window.initMap = initMap;
  }, [initMap, loadMap])

    useEffect(() => {
        renderMap();
    }, [renderMap]);

  return (
    <div className='map-container'>
      <div className='map-input'>
        <div className='input-container'>
          <input 
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
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
  )
}

export default UserMap;
