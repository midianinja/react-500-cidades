import React, { useState, useEffect } from 'react';
import { SliderWrapper, Item, MoveOnWrapper, Dot } from './sliderCustom.style';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

const cardSize = 300;

const renderSimpleCards = (users, active) => users.map(( user, index ) => (
  <SimpleCard
    active={active === index}
    key={`${user.id}-simplecard`}
    profileImage={user.profile_image.mimified}
    nameUser={user.name}
    job={user.job}
    bioUser={user.biograph}
    />
  )
);

const Slider = ({ users, customStyle }) => {
    const target = React.createRef();
    const [active, setActive] = useState();
    const [dots, setDots] = useState([]);
    const [cardPerPage, setCardPerPage] = useState(0);
    const onclickfunction = (index) => {
      const element = target.current;
      element.scrollLeft = (index) * (cardPerPage * cardSize);
      setActive(index);
    };

    useEffect(() => {
      if (window) {
        const cardsPerPage = Math.floor(window.innerWidth / cardSize);
        const newPages = Math.ceil(users.length / cardsPerPage);
        const arr = [];
        for(let i=1; i <= newPages; i++) arr.push(0);
        if (arr.length !== dots.length) {
          setDots(arr);
          setCardPerPage(cardsPerPage);
        }
      }
    },[window, users]);

    return (
      <SliderWrapper ref={target} >
          <Item customStyle={customStyle}>
            {renderSimpleCards(users, active)}
          </Item>
          <MoveOnWrapper>
            {dots.map((item, index) => {
                return(
                  <Dot key={`${index}-dot`} onClick={() => onclickfunction(index)} />
                );
            })}
          </MoveOnWrapper>
        </SliderWrapper>
    );
}

export default Slider;

