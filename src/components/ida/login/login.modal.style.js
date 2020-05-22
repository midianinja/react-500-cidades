import styled from "styled-components";
import { black, gray, white, purple, white50 } from "../settings/colors";

export const LoginWrapper = styled.section`
  display: ${(props) => {
    const { isOpen } = props;
    return isOpen ? 'block' : 'none';
  }};
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 30;
  background-color: ${purple};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  padding-top: 45px;

  @media (min-width: 768px) {
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const Icon = styled.img`
  width: 100%;
  max-width: 230px;
  display: block;
  position: relative;
  right: -40px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: inline-block;
    max-width: 400px;
    vertical-align: middle;
    right: 0px;
  }
`;

export const Arrow = styled.img`
  width: 100%;
`;

export const ExitArrow = styled.img`
  width: 22px;
  position: absolute;
  top: 15px;
  right: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 30px;
  }
`;

export const inputGroupStyle = `
  margin-bottom: 20px;
`;

export const inputGroupLabelStyle = `
  color: ${gray};
`;

export const Form = styled.form`
  width: 100%;
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(100% - 404px);
    max-width: 400;
    vertical-align: middle;
  }
`;

export const Title = styled.h1`
  color: ${white};
  font-size: 3em;
  line-height: 1.20833333333em;
  font-weight: 400;
  max-width: 230px;
  margin-top: -60px;
  margin-bottom: 30px;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const ForgetPasswordLink = styled.a`
  text-decoration: none;
  color: ${white50};
  font-size: 0.7142857143em;
  font-weight: 300;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  :not([href]) {
    color: ${white};
  }
`;
