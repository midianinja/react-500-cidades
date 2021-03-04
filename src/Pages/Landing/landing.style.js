import styled from "styled-components";
import logoIDA from '../../assets/icons/logoida-color.svg';
import ArrowRight from '../../assets/icons/keyboard_arrow_right_24px.svg'

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
  background-attachment: scroll;
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: 75% 60%;
  height: 130vh;
  position: relative;
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height: 250vh;
    background-position: 68% 60%;
  }
  @media only screen 
  and (min-device-width: 360px) 
  and (max-device-width: 640px)
  and (-webkit-min-device-pixel-ratio: 2) {
    height: 200vh;
    background-position: 68% 60%;
  } 
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    height: 170vh;
  }
  @media (min-width:460px) {
    height: 150vh;
  }
  @media (min-width: 768px) {
    padding-top: 0;
    background-image: url("https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/mergulho-500cidades-desktop.png");
    background-position: 64% 60%;
    height: 170vh;
  }
  @media (min-width: 992px) {
    background-position: 64% 70%;
  }
  @media (min-width: 1024px) {
    background-position: 55% 35%;
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
    padding-top: 9rem;
    padding-bottom: 0px;
    width: 50%; 
  }
  @media (min-width: 992px) {
    width: 40%; 
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
  color: var(--brown);
  background-color: var(--white);
  font-family: "Roboto Medium", sans-serif;
  font-size:1.25rem;
  text-decoration: none;
  margin: 1em 0;
  padding: 0.5rem;
  border: none;
  width: 200px;
  max-width: 100%;
  border-radius: 0.5rem;
  position: relative;
  top: 0;
  transition: all 300ms ease-in-out;
  box-shadow: 0 0.4em var(--light-gray), 0 0.6em ;
  &:hover {
    top: 0.2em;
    box-shadow: 0 0.2em var(--light-gray), 0 0.4em;
  }
  &:active {
    top: 0.6em;
    box-shadow: 0 0.1em;
  }
  &::before{
    content: url('${logoIDA}');
    display: inline-block;
    width: 20px;
    padding-right: .5em;
    vertical-align: middle;
  }
`;

export const HaveRegisterLink = styled.a`
  color: var(--white);
  padding: .8rem 0;
  font-size: 1em;
  text-decoration: underline;
  cursor:pointer;
  &:active {
    color: var(--white);
    padding: 0.8rem;
    font-size: 1rem;
    text-decoration: underline;
  }
  &:visited {
      color: var(--white);
      text-decoration: underline;
  }
  &:hover {
      color: var(--red);
      text-decoration: none;
  }
`;

export const ShortTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  position: relative;
  top: 8%;
  bottom: -5%;
  width: 100%;
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    top: 5%;
    bottom: -20%;
  }
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    bottom: -20%;
  }
  @media (min-width: 768px) {
    margin: 0;
    top:25%;
    bottom: -20%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ShortTextTitle = styled.h2`
  font-size: 3em;
  word-spacing: normal;
  width: 300px;
  margin: 0;
  padding: 0 .6em;
  color: var(--white);
  @media (min-width: 768px) {
    width: 340px;
    padding: 0 8px;
  }
`;

export const ShortText = styled.p`
  font-size: 1.2em;
  word-spacing: normal;
  width: 300px;
  color: #FFF;
  margin: 0;
  padding: 0 1.6em;
  color: var(--white);
  @media (min-width: 768px) {
    width: 340px;
    padding: 0 8px;
  }
`;

export const MapSection = styled.section`
  width: 100%;
  height:auto;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    min-height: 60vh;
  }
`;

export const MapContainer = styled.div`
  width: 90%;
  position: relative;
  top: -50px;
`;

export const MapImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const GoToMap = styled.button`
  color: var(--white);
  background-color: var(--blue);
  font-family: "Roboto Medium", sans-serif;
  font-size:1.25em;
  text-decoration: none;
  width: 260px;
  max-width: 100%;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  position: relative;
  top: 0;
  transition: all 300ms ease-in-out;
  box-shadow: 0 0.4em var(--darker-blue), 0 0.6em;
  &:hover {
    top: 0.2em;
    box-shadow: 0 0.2em var(--darker-blue), 0 0.4em;
  }
  &:active {
    top: 0.6em;
    box-shadow: 0 0.1em rgba(0, 0, 0, 0.4);
  }
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
  color: var(--brown);
  padding: 50px 0;
`;

export const CarouselContainer = styled.section`
  width: 90%;
  color: var(--brown);
  margin:0 auto;
`;

export const CarouselTitle = styled.h2`
  font-size: 2.6em;
  color: var(--brown);
  margin-bottom: 40px;
  padding-left: 30px;
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
  background-position:-15px 0%;
  background-attachment: scroll;
  @media (min-width:768px) {
    background-position:56px 0%;
  }
`;

export const PhraseWrapper = styled.div`
`;

export const Phrase = styled.p`
  color: var(--brown);
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
export const NewsLetter = styled.section`
  background-color: var(--red);
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  color: var(--white);
  align-items: center;
`;
export const NewsLetterContainer = styled.div`
  disĺay:flex;
  flex-direction:column;
  align-items: flex-end;
  width: 100%;
  max-width: 80vw;
  @media (min-width: 768px) {
    max-width: 50vw;
  }
`;
export const HeadingNews = styled.h3`
  font-size: 2rem;
  color: var(--white);
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
export const TextNews = styled.p`
  font-size: 1rem;
  color: var(--white);
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const NewsLetterImg = styled.img`
  padding: 2rem;
  width: 85vw;
  max-width: 316px;
`;
export const NewsSubscription = styled.div`
  width: max-content;
  display: flex;
  margin-top: 3rem;
  height: 30px;
  input{
    background:rgba(255, 255, 255, .3);
    font-weight: 700;
    color:var(--white);
    border: none;
    padding: .5rem;
    border-radius:.3rem 0 0 .3rem;
  }
`;
export const ButtonNews = styled.button`
  color: var(--white);
  background-color: var(--blue);
  box-shadow: none;
  border: none;
  padding: .1rem 1rem;
  border-radius: 0 .3rem .3rem 0;
  height: 30px;
  margin: 0;
  margin-top: 5px;
  &::before{
    content: url('${ArrowRight}');
    display: inline-block;
    padding-right: 3px;
    vertical-align: middle;
    font-weight: 900;
  }
`;

export const Footer = styled.footer`
  display: flex;
  color: var(--white);
  font-size: 14px;
  font-weight: 700;
  align-content: center;
  flex-wrap: wrap;
`;
export const OrgsContainer = styled.div`
  flex: 50% 1;
  background-color: var(--eggplant);
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
  align-items: center;
  flex-wrap: wrap;
`; 
export const TextWhoOrgs = styled.p`
  color: var(--white);
  margin: 0;
  font-size: 1em;
  align-self: center;
  width: fit-content;
  margin:0 auto;
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
  background-color: var(--brown);
  text-align:left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  flex: 50% 1;
  min-height: 14vh;
  padding: 1rem 2rem;
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

