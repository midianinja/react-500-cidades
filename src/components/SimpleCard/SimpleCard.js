import React from 'react';
import { Card, ProfileImg, UserName, UserJob, UserBio } from './simpleCard.styled';


const defailtBio = "Em Parauapebas sempre achei que não tinha jeito. Que tudo ficava parado, nas moscas. Poder conhecer e se conectar com tanta gente animada, com vontade de mudar as coisas É algo que eu nunca imaginei";

const SimpleCard = (props) => {
    const theme = {
        main: `${window.innerWidth}`
      };
    return(
        <Card theme={theme} active={props.active} >
            <ProfileImg src={props.profileImage} alt="Foto de perfil do Agente"/>
            <UserName>{props.nameUser}</UserName>
            <UserJob>{props.job}</UserJob>
            <UserBio>{props.bioUser || defailtBio}</UserBio>
        </Card>
    );
}

export default SimpleCard;