import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position:relative;
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 80%;
    margin: 2rem auto;
    overflow:hidden;
`;
export const Card = styled.div`
    display: flex;
    align-items:center;
    min-width:100%;
    height: 500px;
    transition: 0.5s;
    overflow:hidden;
    @media (min-width: 576px){
        min-width:50%;
    }
    @media (min-width: 768px){
        min-width:33.3%;
    }
    @media (min-width: 992px){
        min-width:25%;
    }
    @media (min-width: 1024px){
        min-width:20%;
    }
`;

export const MoveLeft = styled.button`
    position:absolute;
    top:95%;
    left:50%;
    border-radius:60px;
    background-color: var(--blue);
    transform:translateY(-50%);
    width: .5rem;
    height: .5rem;
    border:none;
`;

export const MoveRight = styled.button`
    position:absolute;
    top:95%;
    right:50%;
    border-radius:60px;
    background-color: var(--blue);
    transform:translateY(-50%);
    width: .5rem;
    height: .5rem;
    border:none;
`;
