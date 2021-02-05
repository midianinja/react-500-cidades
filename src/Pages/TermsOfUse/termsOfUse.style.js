import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--off-white);
    height: auto;
    height: 100vh;
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    overflow-x: auto;
    z-index: 99;
`;

export const Wrapper = styled.article`
    height: auto;
    min-height: 100vh;
    width: 80%;
    margin: 2.5rem auto;
    padding: 5rem 9rem;
    background-color: var(--white);
    border-radius:10px;
    font-family: Roboto;
    font-style: normal;
    color: #222;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    div{
        text-align:center;
        margin-top: 3rem;
    }
`;

export const Title =  styled.h1`
    font-size: 2.6rem;
    font-weight: bold;
    line-height: 3.1rem;
    margin-bottom:2.5rem;
`;


