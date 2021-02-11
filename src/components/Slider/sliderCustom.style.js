import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position:relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80%;
    overflow-x: hidden;

`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height: 100%;
    overflow-x: visible;
    @media (min-width: 576px){
        overflow-x: auto;
        ::-webkit-scrollbar {
            display: none;
            }
    }
`;

export const MoveOnWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 40px;
`;

export const Dot = styled.button`
    width:10px;
    height:10px;
    border-radius: 5px;
    cursor: pointer;
    background: var(--light-gray);
    border: none;
    :active {
        background: var(--blue);
        transform: scale(1.6);
    }
`;