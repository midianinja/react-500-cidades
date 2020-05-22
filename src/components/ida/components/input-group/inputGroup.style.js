import styled from "styled-components";
import {
  white, secondaryRed,
} from "../../settings/colors";

export const InptGroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  vertical-align: top;
  ${props => props.customStyle}
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 0.8em;
  color: ${white};
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const ErrorText = styled.span`
  font-size: 0.8em;
  margin-bottom: 10px;
  margin-left: 5px;
  font-weight: 300;   
  color: ${secondaryRed};  
`;

export const InfoText = styled.span`
  font-size: 0.6em;
  margin-left: 5px;
  color: ${white};
  font-weight: 300;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;