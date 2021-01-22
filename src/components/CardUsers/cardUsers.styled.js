import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction:column;
    font-family: Roboto;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    padding:1.5rem;
    height:500px;
    img{
        max-width: 260px;
        width: 100%;
        margin: 0 auto;
    }
    h3 {
        font-weight: bold;
        font-size: 30px;
        color: var(--brown);
    }
    small{
        font-size: 10px;
        font-weight: normal;
        text-transform: uppercase;
        color: var(--gray);
    }
    p{
        background: url('../../assets/aspas.svg') no-repeat;
        background-size: contain;
        font-size: 14px;
        color: var(--brown);
        font-weight: normal;
        height: 150px;
    }
`;

