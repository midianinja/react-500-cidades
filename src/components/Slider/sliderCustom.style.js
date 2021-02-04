import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position:relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 95%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
    display: none;
    }
`;

export const MoveOnWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid yellow;
    width: 30%;
    height: 40px;
`;

export const Dot = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 60px;
    border: 1px solid red;
    :active {
        background: red;
    }
`;