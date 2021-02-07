import styled from 'styled-components';


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 435px;
    text-align: center;
    flex: 0 0 ${props => props.theme.main}px;
    @media (min-width: 576px) {
        flex: 0 0 50%;
    }
    @media (min-width: 768px) {
        flex: 0 0 33.3%;
    }
    @media (min-width: 992px) {
        flex: 0 0 25%;
    }
    @media (min-width: 1024px) {
        flex: 0 0 20%;
    }
    @media only screen (min-width: 1025px) and (max-width:1920px) {
        flex: 0 0 20%;
    }
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

Card.defaultProps = {
    theme: {
      main: `${window.innerWidth}`
    }
  }