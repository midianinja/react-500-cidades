import styled from 'styled-components';
import quote from  '../../assets/quote.png';


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 1rem;
    width:480px;
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
    div{
        background: url('${quote}') no-repeat;
        background-size: auto;
        background-position: left top;
        height: 200px;
        p{
            padding: 2rem 0 0 0;
            display: -webkit-box;
            max-width: 70vw;
            margin: 0 auto;
            line-height: 1.6;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p::after {
            content: "…";
            float: right;
            position: relative;
            top: -18px;
            left: 100%;
            width: 3em;
            margin-left: -3em;
            padding-right: 5px;
            text-align: right;
            background: white;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
        }
    }
    

`;

Card.defaultProps = {
    theme: {
      main: `${window.innerWidth}`
    }
  }