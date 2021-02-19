import styled from 'styled-components';

export const RegisterWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-x: auto;
  z-index: 99;
  background-color: white;
  width:100vw;
`;

export const RegisterContainer = styled.div`
  overflow-x: hidden;
`;

export const CoverWrapper = styled.div`
  /* background: linear-gradient(180deg, rgba(0,0,0,0) 0%,  rgba(0, 0, 0, 0.3) 50%); */
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4rem;
  position: relative;
  background-position: 50% 40%;
  background-repeat: no-repeat; 
  background-size: cover;
  background-color: #EBEBEB;
  background-image: url(${props => props.cover_image});
`;

export const Cover = styled.div`
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%,  rgba(0, 0, 0, 0.3) 50%);
  width: 100%;
  z-index: 0;
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  height: 330px;
  justify-content: center;
  @media(max-width: 768px) {
    height: 180px;
  }
`;

export const AddPhotoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DADADA;
  border-radius: 100%;
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  
`;

export const ProfileImageConteiner = styled.div`
  @media(max-width: 768px) {
    position: absolute;
    bottom: -85px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
export const AddPhotoButtonMobile = styled.label`
  cursor: pointer;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid #2E1F2B;
  background-color: #FFF;
  margin-top: 15px;
  font-size: .8em;
  display: inline-block;
  
  @media(min-width: 769px) {
    display: none
  }
`;

export const MainFields = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
  height: 100px;
  justify-content: center;
  @media(max-width: 768px) {
    display: none;
  }
`;

export const CoverSize = styled.label`
  font-size: .7em;
  color: rgba(255,255,255, .8);
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-weight: bold;
`;

export const Wrapperinputs = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 20px;
  display: flex;
`;

export const customInputStyle = `
  background-color: transparent;
  font-size: 1.8em;
  font-weight: bold;margin-bottom: 10px;
  color: #FFF;
  ::placeholder {
    color: rgba(255,255,255,.8);
  }
  :focus {
    border-bottom: 1px solid #FFF;
    border-radius: 0;
  }
`;
