import styled from "styled-components";

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  ::placeholder {
    color: var(--light-gray);
    opacity: 1;
  }
  ${props => props.error ? 'border: 1px solid red;' : ''}
  ${props => props.customStyle}
`;