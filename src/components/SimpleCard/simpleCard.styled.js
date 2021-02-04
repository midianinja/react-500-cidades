import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 298px;
    height: 576px;
    text-align: center;
    /* border: 1px solid rebeccapurple; */
    margin: 0 45px .5rem 0;
    img {
        width: 256px;
        height: 256px;
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
        backgound-image:url('../../assets/quote.png');
    }
`;