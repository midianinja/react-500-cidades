import styled from "styled-components";

export const Wrapper = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  background-image: url(${props => props.bgImage});
  border-radius: ${props => (props.borderRadius || 0)};
  cursor: pointer;
  * {
    cursor: pointer;
  }
  ${props => props.customStyle}
`;

export const Label = styled.label`
  vertical-align: middle;
  color: #FFF;
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;
`;