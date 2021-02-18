import styled from "styled-components";

export const FormWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
export const FormContainer = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 20px;
`;

export const SectionLabel = styled.label`
  font-size: 1em;
  color: #2E1F2B;
  font-weight: bold;
  margin-bottom: 20px;
  display: inline-block;
`;

export const FilledButton = styled.button`
  margin: 0;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.3em;
  color: #FFF;
  border: 0;
  background-color: #4ACAC1;

  @media(max-width: 768px) {
    margin: 10px 0;
    max-width: 160px;
  }
`;

export const OutlineButton = styled.button`
  margin: 0;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.3em;
  color: #4ACAC1;
  border: 1px solid #4ACAC1;
  background-color: transparent;
  margin-right: 20px;
  @media(max-width: 768px) {
    margin: 0;
    max-width: 160px;
    font-size: 1em;
    border: none;
    color: #2E1F2B;
  }
`;
