import styled from 'styled-components';
import logoImg from '../../assets/500cidades-logo.png';
import aboutImage from '../../assets/500cidades-header-sobre.png';
import aboutImageMobile from '../../assets/500cidades-header-sobre-mobile.png';

export const Container = styled.section`
    background-color: var(--off-white);
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-x: auto;
    z-index: 99;
`;

export const BannerImg = styled.div`
    width: 100%;
    height: 50vh;
    background: url(${aboutImageMobile}) var(--eggplant);
    background-position: 40% 0%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    div {
        text-align:left;
    }
`;

export const ImgLogo = styled.div`
    background: url(${logoImg}) no-repeat;
    background-position: 125px 60%;
    z-index: 1;
    width: 100%;
`;


export const TitleBanner = styled.h3`
    position: absolute;
    top: 39%;
    left: 10%;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 3.1rem;
    color: var(--white);
`;

export const Wrapper = styled.article`
    height: auto;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
    padding: 5rem 9rem;
    background-color: var(--white);
    border-radius: 0 0 10px 10px;
    font-family: Roboto;
    font-style: normal;
    color: #222;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    @media (max-width: 576px){
        padding: 2rem 3.5rem; 
    }
`;
export const DivImages = styled.div`
    div{
        text-align:center;
        margin-top: 3rem;
    }
    p {
        width:50%;
    }
    img {
        width: 100%;
    }
`;




