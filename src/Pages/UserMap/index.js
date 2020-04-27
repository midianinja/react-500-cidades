import React, { useState, useRef, useEffect, useCallback } from 'react';
import GoogleMap from 'google-map-react'
import Marker from './components/Marker'
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
  const [centerMap, setCenterMap] = useState({lat:-15.763178, lng:-47.870717})
  const [zoom, setZoom] = useState(12)

  return(
    <div className="map-container">
      <GoogleMap
        bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
        defaultCenter={centerMap}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      > 
        {agents.map(agent => 
          <Marker 
            key={agent.id}
            lat={parseFloat(agent.lat)}
            lng={parseFloat(agent.lng)}
            content={agent}
            zoom={zoom}
          />
        )}
      </GoogleMap>
    </div>
  )
}

export default UserMap;

//   const [centerMap, setCenterMap] = useState({lat:-15.763178, lng:-47.870717})
//   const [zoom, setZoom] = useState(12)
// const initMap = useCallback(() => {
//   const map = new window.google.maps.Map(document.getElementById('map'), { //document.getElementById('map')
//       center: {lat:-15.763178, lng:-47.870717},
//       zoom: 12
//   });
  
//   let infoWindow = new window.google.maps.Marker();
//   agents.map(agent => {
//       const marker = new window.google.maps.Marker({
//           position: {lat:agent.lat, lng:agent.lng}, 
//           map: map
//       });
//       return marker.addListener('click', () => {
//           infoWindow.setContent(agent.name)
//           return infoWindow.open(map, marker)
//       })
//   });
// },[])

// const loadMap = useCallback((url) => {
//   const scripts = window.document.getElementsByTagName('script')[0]
//   const newScript = document.createElement('script')
//   newScript.src = url
//   newScript.async = true
//   newScript.defer = true
//   scripts.parentNode.insertBefore(newScript, scripts)
// }, [])

// const renderMap = useCallback(() => {
//   loadMap(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&callback=initMap`);
//   window.initMap = initMap;
// }, [initMap, loadMap])

//   useEffect(() => {
//       renderMap();
//   }, [renderMap]);

// return (
//   <div>
//       <div 
//           id="map" 
//           className="map-container"
//       >
//       </div>
//   </div>
// )