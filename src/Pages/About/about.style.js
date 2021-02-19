import styled from 'styled-components';
import logoImg from '../../assets/500cidades-logo.png';
import aboutImage from '../../assets/500cidades-header-sobre.png';
import aboutImageMobile from '../../assets/500cidades-header-sobre-mobile.png';

export const ContainerAbout = styled.section`
    background-color: var(--off-white);
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-x: auto;
    z-index: 60;
`;

export const BannerImg = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    background: url(${aboutImageMobile}) var(--eggplant) no-repeat;
    background-position: center 10px;
    background-attachment: scroll;
    background-size: contain;
    padding-top: 7rem;
    @media (min-width:576px) {
        background: url(${aboutImage}) var(--eggplant) no-repeat;
        background-position: 0% 27%;
        padding-top: 0;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        position:relative;
    }
    @media (min-width:768px) {
        background-position: -52% 27%;
    }
    @media (min-width:1200px) {
        background-position: -406% 18%;
    }
    @media (min-width:1400px) {
        background-position: 100% 22%;
    }
`;

export const ImgLogo = styled.div`
    background: url(${logoImg}) no-repeat;
    width: 100%;
    background-position: center center;
    background-size: contain;
    height: 30vh;
    @media (min-width:576px) {
        background-size: cover;
        background-position: -16px -100px;
        max-width: 80%;
        height: 100%;
    }
    @media (min-width:768px) {
        max-width: 65%;
        position: relative;
        left: 0;
        background-position: -21px -106px;
    }
    @media (min-width: 992px) {
        max-width: 60%;
        background-position: -65px -101px;
    }
    @media (min-width: 1024px) {
        background-position: 0px -130px;
    }
    @media (min-width: 1200px) {
        max-width: 46%;
        background-position: 1px -100px;
    }
    @media (min-width: 1400px) {
        max-width: 36%;
        background-position: 1px -115px;
        left: 7%;
    }
    @media (min-width: 1560px) {
        background-position: 1px -120px;
        left: 6%;
    }
`;


export const TitleBanner = styled.h3`
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--white);
    margin: 0 auto;
    padding: 2rem 0;
    width:90%;
    @media (min-width:576px) {
        width:40%;
        margin:0;
        align-self: flex-end;
        position: absolute;
        top:60%;
        left: 55%;
    }
    @media (min-width:768px) {
        left: 50%;
    }
    @media (min-width:992px) {
        width: fit-content;
        top:70%;
        left: 40%;
    }
    @media (min-width: 1024px) {
        left:45%;
    }
    @media (min-width: 1200px) {
        left:35%;
    }
`;

export const Wrapper = styled.article`
    height: auto;
    min-height: 100vh;
    width: 80%;
    padding: 3.5rem 0;
    margin: 0 auto;
    background-color: var(--white);
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 20px;
    color: var(--brown);
    z-index:59;
    img{
        width:100%;
        margin:20px auto;
    }
    @media (min-width: 576px){  
        padding: 2rem 3.5rem; 
        width: 100%;
    }
    @media (min-width: 992px){
        height: auto;
        min-height: 100vh;
        width: 80%;
        margin: 0 auto;
        padding: 5rem 9rem;
        border-radius: 0 0 10px 10px;
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    }
`;

export const ButtonBack = styled.button`
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

