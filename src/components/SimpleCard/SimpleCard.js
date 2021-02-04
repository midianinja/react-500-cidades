import React from 'react';
import { Card } from './simpleCard.styled';


const SimpleCard = (props) => {

    return(
        <Card>
            <img src={props.profileImage} alt="Foto de perfil do Agente"/>
            <h3>{props.nameUser}</h3>
            <small>{props.job}</small>
            <p>{props.bioUser}</p>
        </Card>
    );
}

export default SimpleCard;