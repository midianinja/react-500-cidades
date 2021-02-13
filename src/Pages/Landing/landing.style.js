import styled from "styled-components";

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
  background-image: url("https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/mergulho-500cidades-desktop.png");
  background-color: var(--brown);
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  position: relative;
  background-position: top center;
  height: 170vh;
  width: 100vw;
  padding-top: 120px;
  
  @media (max-width: 768px) {
    padding-top: 0;
    background-image: url("https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/mergulho-500cidades-mobile.png");
    background-size: 140% 100%;
  }
  `;

export const CallActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CallActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 200px;
  flex-direction: column;
  padding-bottom: 70px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const CommonText = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.5em;
  color: #FFF;

`;

export const TextWithFocus = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.5em;
  color: var(--green);
`;

export const BigLogo = styled.img`
  width: 450px;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const RegisterButton = styled.button`
  display: block;
  background-color: #DF4545;
  padding: 10px 16px;
  border: none;
  border-radius: 7px;
  color: #FFF;
  font-size: 1em;
`;

export const HaveRegisterLink = styled.a`
  color: var(--white);
  font-size: .7em;
`;

export const ShortTextWrapper = styled.div`
  color: var(--white);
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0;
    position: absolute;
    bottom: 40px;
    width: 100%;
  }
`;

export const ShortTextTitle = styled.h2`
  margin-left: 300px;
  font-size: 1.6em;
  word-spacing: normal;
  width: 300px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0 20px;
  }
`;

export const ShortText = styled.p`
  margin-left: 300px;
  font-size: 1.2em;
  word-spacing: normal;
  width: 300px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0 20px;
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
  height: 50vh;
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
  flex: 50% 1;
  min-height: 14vh;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
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

