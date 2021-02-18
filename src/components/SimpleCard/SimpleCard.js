import React from 'react';
import { Card, Img } from './simpleCard.styled';


const defailtBio = "Em Parauapebas sempre achei que não tinha jeito. Que tudo ficava parado, nas moscas. Poder conhecer e se conectar com tanta gente animada, com vontade de mudar as coisas É algo que eu nunca imaginei";

const SimpleCard = (props) => {
    const theme = {
        main: `${window.innerWidth}`
      };
    return(
        <Card theme={theme} active={props.active} >
            <Img src={props.profileImage} alt="Foto de perfil do Agente"/>
            <h3>{props.nameUser}</h3>
            <small>{props.job}</small>
            <p>{props.bioUser || defailtBio}</p>
        </Card>
    );
}

export default SimpleCard;