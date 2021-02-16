import styled from "styled-components";
import logoIDA from '../../assets/icons/logoida-color.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  left: 0;
  height: 100vh;
  overflow-x: auto;
  background-color: white;
`;

export const Apresentation = styled.section`
  background-image: url("https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/mergulho-500cidades-mobile.png");
  background-color: var(--brown);
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: -534px 0%;
  min-height: 130vh;
  height: 100%;
  @media (min-width:576px){
    background-position: -433px 0%;
  }
  @media (min-width: 768px) {
    padding-top: 0;
    background-image: url("https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/mergulho-500cidades-desktop.png");
    background-position: -260px 0%;
    min-height: 150vh;
  }
  @media (min-width: 992px) {
    background-position: 0px 0%;
    min-height: 170vh;
  }
  `;

export const CallActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 7rem;
  }
`;

export const CallActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 280px;
  flex-direction: column;
  padding-bottom: 70px;
  margin-left: 0;
  @media (min-width: 768px) {
    padding-top: 7rem;
    padding-bottom: 0px;
    width: 50%; 
  }
  @media (min-width: 992px) {
    width: 30%; 
  }
`;

export const CommonText = styled.span`
  display: block;
  font-weight: bold;
  font-size: 2em;
  color: #FFF;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

export const TextWithFocus = styled.span`
  display: block;
  font-weight: bold;
  font-size: 2em;
  color: var(--green);
  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

export const BigLogo = styled.img`
  width: 250px;
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 992px){
    width: 450px;
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  max-width: 100%;
  background-color: var(--white);
  padding: 1rem;
  font-size: 1.5em;
  margin: 20px 0 10px 0;
  border: none;
  -moz-box-shadow: 0 2.8px 0 var(--light-gray);
  -webkit-box-shadow: 0 2.8px 0 var(--light-gray);
  box-shadow: 0 2.8px 0 var(--light-gray);
  border-radius: .3rem;
  color: #1D1D1D;
  &:before{
      content: url('${logoIDA}');
      height: 20px;
      width: 25px;
      padding: 0 .5rem 0 0;
  }
  &:active{
    -moz-box-shadow: 0 2.8px 0 var(--light-gray);
    -webkit-box-shadow: 0 2.8px 0 var(--light-gray);
    box-shadow: 0 2.8px 0 var(--light-gray);
}
  &:visited{
    background-color: var(--white);
    -moz-box-shadow: 0 2.8px 0 var(--light-gray);
    -webkit-box-shadow: 0 2.8px 0 var(--light-gray);
    box-shadow: 0 2.8px 0 var(--light-gray);
}
`;

export const HaveRegisterLink = styled.a`
  color: var(--white);
  font-size: 1em;
`;

export const ShortTextWrapper = styled.div`
  color: var(--white);
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  position: relative;
  bottom: -70px;
  width: 100%;
  @media (min-width: 768px) {
    margin: 0;
    bottom: -340px;
    width: 100%;
  }
  @media (min-width: 992px) {
    margin: 0;
    bottom: -440px;
    width: 100%;
  }
`;

export const ShortTextTitle = styled.h2`
  margin-left: 300px;
  font-size: 3em;
  word-spacing: normal;
  width: 300px;
  margin: 0;
  padding: 0 20px;
  @media (min-width: 768px) {
    width: 270px;
    padding: 0 8px;
  }
`;

export const ShortText = styled.p`
  font-size: 1.2em;
  word-spacing: normal;
  width: 260px;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    width: 270px;
    padding: 0 8px;
  }
`;

export const MapSection = styled.section`
  padding: 100px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px 0;
  }
`;

export const MapImage = styled.img`
  width: 80vw;
  border-radius: 7px;
`;

export const GoToMap = styled.button`
  color: var(--white);
  background-color: var(--blue);
  box-shadow: none;
  border: none;
  font-size: 1.5em;
  padding: 10px 15px;
  border-radius: 7px;
`;

export const VideoSection = styled.section`
  width: 100vw;
  height: 80vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export const CarouselSection = styled.section`
  width: 100vw;
  background-color: #F2F2F2;
  padding: 50px 0;
`;

export const CarouselTitle = styled.h2`
  font-size: 1.3em;
  color: #3B2737;
  margin-bottom: 40px;
  padding-left: 100px;
`;

export const PathWaySection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 47vh;
  background-color: var(--blue);
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 100px 0;
  }
`;

export const PahtImage = styled.div`
  position: absolute;
  left: 0;
  top: -16px;
  width: 100%;
  height: 49vh;
  background: url('https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/500cidades-asset-tracejado-vetor.svg') no-repeat;
  background-size: cover;
  background-position:center top;
  background-attachment: scroll;
`;

export const PhraseWrapper = styled.div``;

export const Phrase = styled.p`
  color: var(--eggplant);
  word-wrap: break-word;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  padding: 1rem;
  text-align: center;
`;

export const PhraseWhite = styled.span`
  color: var(--white);
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 48px;
`;

export const Footer = styled.footer`
  background-color: var(--eggplant);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: var(--white);
  align-items: center;
`;

export const NinjaBrand = styled.img`
  width: 50px;
  margin: 20px;
`;

export const ReBrand = styled.img`
  width: 160px;
  margin: 20px;
`;

export const LinksWrapper = styled.div`
  /* flex-grow: 1; */
  background-color: var(--brown);
  text-align:left;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 14vh;
  flex: 50% 1;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    flex: none;
    height: auto;
    flex-direction: column;
    width: 100vw;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--white);
  font-size: 1em;
  font-weight: bold;
  :hover {
    color: var(--white);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

