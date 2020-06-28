import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Wrapper, Container, UserContainer,
  UserPhoto, UserInfo, Name,
  Address, Job, SeeMore,
} from './samePlace.style';

// const filterNumbers = (value) =>  value.replace(/\D/g, "");

const renderUsers = (users, openUser) => users.map((usr) => (
  <UserContainer key={usr.id}>
    <UserPhoto
      alt="Foto de perfil"
      src={usr.profile_image.mimified}
    />
    <UserInfo>
      <Name>{usr.name}</Name>
      <Address>{`${usr.address.city} / ${usr.address.state}`}</Address>
      <Job>{usr.job}</Job>
    </UserInfo>
    <SeeMore onClick={() => openUser(usr)}>
      Ver mais
    </SeeMore>
  </UserContainer>
));

function SamePLaceListModal({ users, onClose, openUser }) {
  return (
    <Wrapper onClick={(onClose)} isOpen={users.length}>
      <Container onClick={(e) => e.stopPropagation()}>
          {renderUsers(users, openUser)}
      </Container>
    </Wrapper>
  );
}

const historyShape = {
  push: PropTypes.func,
};

SamePLaceListModal.propTypes = {
  history: PropTypes.shape(historyShape).isRequired,
};

export default withRouter(SamePLaceListModal);
