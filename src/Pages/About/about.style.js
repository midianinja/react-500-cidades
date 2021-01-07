import styled from 'styled-components';
import aboutImage from '../../assets/banner-sobre.png';

export const Container = styled.section`
    background-color: var(--off-white);
    height: auto;
    min-height: 100vh;
`;

export const BannerImg = styled.div`
    width:100%;
    height: 40vh;
    background: url(${aboutImage}) var(--eggplant);
    background-position: 50% -40px;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    h1 {
        position: absolute;
        top: 25%;
        left: 25%;
        font-size: 2.6rem;
        font-weight: 700;
        line-height: 3.1rem;
        color: var(--white);
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
`;




