import React from 'react';
import { Card } from './simpleCard.styled';


const SimpleCard = (props) => {

    const theme = {
        main: `${window.innerWidth}`
      };
    return(
        // <Card style={{ flex: ` 0 0 ${window.innerWidth}px` }} >
        <Card theme={theme} >
            <img src={props.profileImage} alt="Foto de perfil do Agente"/>
            <h3>{props.nameUser}</h3>
            <small>{props.job}</small>
            <p>{props.bioUser}
            Em Parauapebas sempre achei que não tinha jeito. Que tudo ficava parado, nas moscas. Poder conhecer e se conectar com tanta gente animada, com vontade de mudar as coisas.. É algo que eu nunca imaginei
            
            </p>
        </Card>
    );
}

export default SimpleCard;