import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
`;
export const MapComponent = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
`;

export const InputContainer = styled.div`
  width: 70vw;
  max-width: 600px;
  position: fixed;
  z-index: 1;
  margin: auto;
  left: 0;
  right: 0;
  top: 120px;
`;

export const Input = styled.input`
  border-radius: 30px;
  height: 54px;
  padding: .2rem 1.2rem .2rem 3rem;
  width: -webkit-fill-available;
  opacity: .7;
  &:focus {
    opacity: 1;
  }
  &::placeholder {
    color: rgb(136, 136, 136);
    opacity: 1; /* Firefox */
  }
  
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: rgb(136, 136, 136);
  }
  
  &::-ms-input-placeholder { /* Microsoft Edge */
   color: rgb(136, 136, 136);
`;

export const Icon = styled.span`
  position: absolute;
  left: 15px;
  top: 17px;
`;
