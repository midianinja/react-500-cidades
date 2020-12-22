import styled from "styled-components";

export const Wrapper = styled.section`
  display: ${(props) => {
    const { isOpen } = props;
    return !isOpen ? 'none' : 'flex';
  }};
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 70;
  padding: 30px;
  background-color: rgba(0,0,0, .7);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 15px 15px 30px 15px;
  background-color: var(--white);
  border-radius: 20px;
  max-height: 300px;
  overflow-x: auto;
  overflow-y: none;
`;

export const UserContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 1fr 20%;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
  background-color: rgba(210,210,210,.7);
`;

export const UserInfo = styled.div`
  display: grid;
  max-width: 150px;
`;

export const Name = styled.label`
  display: -webkit-box;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Address = styled.label`
  font-weight: normal;
  font-size: .7em;
  `;

export const Job = styled.label`
  font-weight: normal;
  font-size: .6em;
  `;

export const SeeMore = styled.label`
  font-size: .7em;
  text-decoration: underline;
  cursor: pointer;
`;
