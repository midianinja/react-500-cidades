import React, { useState } from 'react';
import pin from '../../../../assets/marcador-oportunidade.svg'

const Marker = (props) => {
    const [bubble, setBubble] = useState(false)

    return (
      <>  
      {bubble ? <div>
        content={props.content} 
      </div> : ''}
      <div 
        className="map-marker"
        key={props.key}
        lat={props.lat}
        lng={props.lng}
      >
        <button 
            className="marker-btn" 
            onClick={() => setBubble(true)}>
            <img src={pin} alt="marcador do agente" />
        </button>
      </div>
      </>
    );
};

export default Marker;