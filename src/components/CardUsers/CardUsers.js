import React from 'react';
import { CardContainer  } from './cardUsers.styled';

const CardUsers = (props) => {
    const { user } = props;
    console.log(user);
    return(
        <CardContainer>
            <img src={user.imgProfile} alt="Foto do perfil do usuário" />
            <h3>{user.userName}</h3>
            <small>{user.userJob}</small>
            <p>{user.userBio}</p>
        </CardContainer>
    );
}

export default CardUsers;