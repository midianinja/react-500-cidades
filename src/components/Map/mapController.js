const defaultUserImage = "https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/500-cities/images/500cidades-asset-avatar-2.png";


export const startMap = ({
  state, mapRef, setAutocomplete, searchInputRef, showMore,
}) => {
  const brazilBounds = {
    west: -73.9872354804, south: -33.7683777809, east: -34.7299934555, north: 5.24448639569
  }
  const location = state.user ? state.user.address : {};
  mapRef.current = new window.google.maps.Map(document.getElementById('map-component'), {
    center: {
      lat: location.latitude || -23.543095,
      lng: location.longitude || -46.627235,
    },
    zoom: 12,
    restriction: {
      latLngBounds: brazilBounds,
      strictBounds: false
    },
    mapTypeControl: false,
    streetViewControl: false
  });
  if (showMore) setAutocomplete(new window.google.maps.places.Autocomplete(searchInputRef.current));
};

export const insertPins = ({ allusers, mapRef, setSamePlaceList }) => {
  if(!window.google) return;

  const infoWindow = new window.google.maps.InfoWindow();

  // window.google.maps.Marker.prototype.getDraggable = function () { return true };
  const markers = allusers.filter(usr => usr.address).map(agent => {
    const marker = new window.google.maps.Marker({
      position: { lat: agent.address.latitude, lng: agent.address.longitude },
    });
    marker.addListener('click', () => {
      const skill = agent.skills.map((skill, index) => `<div class='agent-skills-item' id=${index}>${skill}</div>`).join('');
      
      infoWindow.setContent(`
      <div class='info-window'>
        <div class='agent-info'>
          <div class='userinfo'>
            <img
            class='user-info-img'
            alt="user-photo"
            src=${agent.profile_image.mimified || defaultUserImage}
            >
          </div>
          <div>
            <p class='agent-info--text1'>${agent.name}</p>
            <p class='agent-info--text2'>${agent.address.city} / ${agent.address.state}</p>
            <p class='agent-info--text3'>${agent.job}</p>
          </div>
        </div>
        <div class='agent-skills'>${skill}</div>
        <button class='btn-ver-mais' type="button" onclick="document.getElementById('${agent.id}').click()" class='agent-plus'>Ver Mais</button>
      </div>`
      )
      return infoWindow.open(mapRef.current, marker)
    });
    return marker;
  });
  
  var markerCluster = new window.MarkerClusterer(mapRef.current, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

  markerCluster.addListener('click', (e) => {
    const localMarkers = e.getMarkers();
    const positions = localMarkers.map((mk) => ({
      lat: mk.position.lat(),
      lng: mk.position.lng(),
    }));
    const firstPosition = JSON.stringify(positions[0]);
    const sameLocation = !positions.find(p => (JSON.stringify(p) !== firstPosition ? true : false))
    if (sameLocation) {
      const allusersPositions = allusers.filter(usr => usr.address).map((usr) => ({
        position: JSON.stringify({
          lat: usr.address.latitude,
          lng: usr.address.longitude,
        }),
        user: usr,
      }));
      const userIdInThisPosition = allusersPositions.filter((usr) => (usr.position === firstPosition));
      setSamePlaceList(userIdInThisPosition.map((usr) => usr.user));
    }
  });
};

export const fetchAutocomplete = ({ autocomplete, mapRef, dispatch }) => {
  autocomplete.bindTo('bounds', mapRef.current);
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      dispatch({
        type: 'SHOW_TOAST',
        data: {
          error: true,
          msg: "endereço não encontrado"
        }
      })
      return;
    }
    if (place.geometry.viewport) {
      mapRef.current.fitBounds(place.geometry.viewport);
    } else {
      mapRef.current.setCenter(place.geometry.location);
      mapRef.current.setZoom(17);
    }
  });
};

  