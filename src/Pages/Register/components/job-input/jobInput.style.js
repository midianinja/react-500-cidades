import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  color: #FFF;
  `;

export const Label = styled.label`
  vertical-align: middle;
  color: #FFF;
`;

export const List = styled.div`
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  background-color: #F1F1F1;
  max-height: 150px;
  overflow-x: auto;
  max-width: 200px;
  position: absolute;
  border-radius: 7px;
`;

export const ListItem = styled.label`
  display: block;
  color: #2E1F2B;
  padding: 5px 0;
  text-align: center;
  :hover {
    background-color: #D0D0D0;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;
`;
