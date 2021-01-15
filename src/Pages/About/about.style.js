import styled from 'styled-components';
import logoImg from '../../assets/500cidades-logo.png';
import aboutImage from '../../assets/mergulho-500cidades-mobile.png';

export const Container = styled.section`
    background-color: var(--off-white);
    height: auto;
    min-height: 100vh;
`;

export const BannerImg = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 44vh;
    background: url(${aboutImage}) var(--eggplant);
    background-position: 50% 30%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    div {
        background: url(${logoImg}) no-repeat;
        background-position: right 60%;
        display: flex;
        justify-content: flex-end;
        width: 50vw;
       
    }
    h1 {
        align-self:flex-end;
        font-size: 2.6rem;
        font-weight: 700;
        line-height: 3.1rem;
        color: var(--white);
    }
    @media (max-width: 576px){
        justify-content: flex-start;
        background: var(--eggplant);
        div {
            background: url(${logoImg}) no-repeat;
            background-position: center 60%;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            background-size:contain;
        }
        h1 {
            padding: 2rem 1rem;
            word-spacing: 2vw;
        }
    }
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
    div{
        text-align:center;
        margin-top: 3rem;
    }
    p:nth-last-child(-n + 3) {
            width:50%;
        }
    @media (max-width: 576px){
        padding: 2rem 3.5rem; 
    }
`;




