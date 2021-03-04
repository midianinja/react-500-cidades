import styled from 'styled-components';
import PoliceImage from '../../assets/mapa-ativista.png';
import iconBack from '../../assets/icons/arrow_back_purple.svg';
import socialIcons from '../../assets/icons/social-media-icons-png-wwwimgkidcom-the-image-kid-5498.png';

export const Container = styled.section`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: var(--off-white);
    height: 100vh;
    overflow-x: auto;
    min-height: 100vh;
`;

export const BannerImg = styled.div`
    width: 100%;
    height: 30vh;
    background: url(${PoliceImage}) var(--eggplant) no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
`;
export const IconBack = styled.button`
    display:none;
    @media (max-width:576px) {
        display:block;
        position:absolute;
        top:60px;
        left:25px;
        color: var(--white);
        background-color: transparent;
        box-shadow: none;
        border: none;
        padding: .1rem 1rem;
        border-radius: 0 .3rem .3rem 0;
        margin: 5px 0 0 0;
        &::before{
          content: url('${iconBack}');
          display: inline-block;
          padding-right: 3px;
          vertical-align: middle;
          font-weight: 900;
        }
    }
`;
export const Wrapper = styled.article`
    height: auto;
    min-height: 100vh;
    padding: 3.5rem 2.5rem;
    background-color: var(--white);
    z-index:59;
    @media (min-width: 576px){  
        padding: 2rem 3.5rem; 
        width: 100%;
    }
    @media (min-width: 992px){
        width: 90%;
        margin: 0 auto;
        padding: 5rem 4rem;
        border-radius: 0 0 10px 10px;
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    }
`;
export const UsualText = styled.p`
    margin:20px 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.8em;
    color: var(--brown);
`;
export const Title =  styled.h1`
    font-family: Roboto;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 3.1rem;
    margin-bottom:2.5rem;
`;

export const Subtitle = styled.h2`
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 1.5rem;
`;

export const Chapter = styled.h3`
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom:1rem;
`;

export const FooterAbout = styled.footer`
    margin-top:2.5rem;
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content: space-between;
    @media (min-width:768px) {
        flex-direction:row;
    }
`;

export const Logo500Img = styled.img`
    width: 150px;
`;

export const SocialMedia = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:fit-content;
`;

export const SocialIcon = styled.img`
    width: 48px;
    margin: 0 10px;
`;

export const Twitter = styled.div`
    background:url(${socialIcons}) no-repeat;
    background-size: cover;
    background-position: 36% 26%;
    width: 48px;
    height: 80px;
`;

export const Instagram = styled.div`
    background:url(${socialIcons}) no-repeat;
    background-size: cover;
    background-position: 64% 26%;
    width: 48px;
    height: 80px;
`;

export const Snapchat = styled.div`
    background:url(${socialIcons}) no-repeat;
    background-size: cover;
    background-position: 93% 26%;
    width: 48px;
    height: 80px;
`;

export const ButtonBack = styled.button`
  color: var(--white);
  background-color: var(--blue);
  font-family: "Roboto Medium", sans-serif;
  font-size:1.25em;
  text-decoration: none;
  width: 150px;
  max-width: 100%;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  position: relative;
  top: 0;
  transition: all 300ms ease-in-out;
  box-shadow: 0 0.4em var(--darker-blue), 0 0.6em ;
  &:hover {
    top: 0.2em;
    box-shadow: 0 0.2em var(--darker-blue), 0 0.4em ;
  }
  &:active {
    top: 0.6em;
    box-shadow: 0 0.1em ;
  }
`;
