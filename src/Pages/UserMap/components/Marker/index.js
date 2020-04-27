import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pin from '../../../../assets/marcador-oportunidade.svg'

const Marker = (props) => {
  const [bubble, setBubble] = useState(false)

  const infoBubbleStyle = {
    width: '260px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    transform: 'translate(-38%, -97%)',
    padding: '1rem',
    height: '222px',
    position: 'absolute',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const closeBubble = {
    position: 'absolute',
    fontWeight: 700,
    right: '1rem',
    top:'1rem'
  }

  const agentInfo = {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }

  const agentInfoImg = {
    border: '1px solid black',
    borderRadius: '100%',
    width: '57px',
    height: '57px',
    marginRight: '10px'
  }

  const agentInfoText1 = {
    marginBottom: '2px',
    fontSize: '16px',
    fontWeight: 700,
  }
  
  const agentInfoText2 = {
    marginBottom: '2px',
    fontSize: '14px',
    color: 'var(--gray)',
  }
  
  const agentInfoText3 = {
    marginBottom: 0,
    fontSize: '12px',
    color: 'var(--gray)',
  }

  const agentSkillsItem = {
    backgroundColor: 'var(--blue)',
    borderRadius: '8px',
    padding: '.3rem .8rem',
    color: 'white',
  }

  const agentSkills = {
    width: '100%',
    height: 'max-content',
    display: 'flex',
  }

    return (
      <div className="marker-container">  
        <div style={infoBubbleStyle}>
          <div style={closeBubble}>X</div>
          <div style={agentInfo}>
            <div style={agentInfoImg}>
              {/* <img/> */}
            </div>
            <div>
              <p style={agentInfoText1}>{props.content.name}</p>
              <p style={agentInfoText2}>{props.content.city} / {props.content.state}</p>
              <p style={agentInfoText3}>{props.content.job}</p>
            </div>
          </div>
          <div style={agentSkills}>
            {props.content.skills.map((skill,index) => 
              <div style={agentSkillsItem} key={index}>{skill}</div>
            )}
          </div>
          <Link to="#" className="agent-plus">Veja Mais</Link>
        </div>
        <div 
          className="map-marker"
          key={props.key}
          lat={props.lat}
          lng={props.lng}
        >
          <button 
              className="marker-btn" 
              onClick={() => setBubble(true)}>
              <img src={pin} alt="marcador do agente" style={{height: 404/props.zoom + 'px'}}/> 
          </button>
        </div>
      </div>
    );
};

export default Marker;

//