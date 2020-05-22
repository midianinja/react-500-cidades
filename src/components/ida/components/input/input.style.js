import styled from "styled-components";
import { white, white10, white50 } from "../../settings/colors";

export const Input = styled.input`
  width: 100%;
  height: 38px;
  color: ${white};
  background-color: ${white10};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;

  :focus {
    outiline: none;
    box-shadow: none;
    padding-left: 14px;
    padding-right: 14px;
  }

  ::placeholder {
    color: ${white50};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${white50};
  }

  ::-ms-input-placeholder {
    color: ${white50};
  }

  ${props => props.customStyle}
`;