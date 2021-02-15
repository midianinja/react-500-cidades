import React from 'react';
import { Card } from './simpleCard.styled';


const defailtBio = "Em Parauapebas sempre achei que não tinha jeito. Que tudo ficava parado, nas moscas. Poder conhecer e se conectar com tanta gente animada, com vontade de mudar as coisas É algo que eu nunca imaginei";

const SimpleCard = (props) => {
    const theme = {
        main: `${window.innerWidth}`
      };
    return(
        // <Card style={{ flex: ` 0 0 ${window.innerWidth}px` }} >
        <Card theme={theme} active={props.active} >
            <img src={props.profileImage} alt="Foto de perfil do Agente"/>
            <h3>{props.nameUser}</h3>
            <small>{props.job}</small>
            <div>
                <p>{props.bioUser || defailtBio}</p>
            </div>
        </Card>
    );
}

export default SimpleCard;