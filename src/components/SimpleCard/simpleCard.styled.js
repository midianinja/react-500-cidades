import styled from 'styled-components';


export const Card = styled.div`
    display: inline-block;
    text-align: center;
    padding: 0 10px;
    width: 300px;
    /* background-color: ${props => props.active ? 'green' : 'transparent'}; */
`;

export const ProfileImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 8px;
    border: none;
`;

export const UserName = styled.h3`
    color: var(--brown);
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    padding: 1rem;
    
`;

export const UserJob = styled.small`
    color: var(--gray-subtitles);
`;
export const UserBio = styled.p`
    background: url("../../../assets/quote.png"), no-repeat;
    background-size: contain;
    background-position: left top;
    padding: 2rem 1rem;
    display: -webkit-box;
    white-space: normal;
    height: 154px;
    margin: 0 auto;
    line-height: 1.6;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

Card.defaultProps = {
   
  }