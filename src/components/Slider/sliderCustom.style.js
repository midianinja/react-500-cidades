import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position:relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: auto;
    height: 500px;
    @media (min-width: 576px){
        ::-webkit-scrollbar {
            display: none;
        }
    }
    
`;

export const Item = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    position: absolute;
    left: 0;
    @media (min-width: 576px){
        ::-webkit-scrollbar {
            display: none;
            }
    }
    ${props => props.customStyle}
`;

export const MoveOnWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 40px;
    position: sticky;
    left: 200px;
    top: 100%;
    @media (max-width: 768px){
        display: none;
    }
`;

export const Dot = styled.button`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    cursor: pointer;
    background: var(--darker-green);
    border: none;
    :active {
        background: var(--blue);
        transform: scale(1.6);
    }
`;