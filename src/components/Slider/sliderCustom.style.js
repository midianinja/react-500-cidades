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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    position: sticky;
    left: 0;
    top: 100%;
    @media (max-width: 768px){
        display: none;
        width: 10%;
    }
`;

export const Dot = styled.button`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    cursor: pointer;
    background: var(--darker-green);
    border: none;
    margin: 0 .5em;
    &:hover{
        background: var(--blue);
        transition: all 300ms;
        transform: scale(1.6);
    }
    &:active {
        background: var(--blue);
        transition: all 300ms;
        transform: scale(1.6);
    }
`;