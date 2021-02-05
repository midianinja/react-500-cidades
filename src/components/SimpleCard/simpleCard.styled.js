import styled from 'styled-components';


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 298px;
    height: 576px;
    text-align: center;
    /* border: 1px solid rebeccapurple; */
    margin: 0 45px .5rem 0;
    padding: .5rem 2rem;
    img {
        width: 180px;
        height: 180px;
        border-radius: 8px;
        border: none;
    }
    h3 {
        color: var(--brown);
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        padding: 1rem;
        
    }
    small {
        color: var(--gray-subtitles);
    }
    p{
        background-image:url('../../../assets/quote.png');
        background-size:contain;
        padding:2rem 1rem;
        overflow:hidden;
        text-overflow: ellipsis;
        max-width: 70vw
    }
`;