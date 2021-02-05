import React, { useState, useEffect } from 'react';
import { SliderWrapper, Item, MoveOnWrapper, Dot, } from './sliderCustom.style';

const Slider = ({ children }) => {
    const target = React.createRef();
    const [ count, setCount ] = useState(0);
    const [ moveProgress, setMoveProgress] = useState(0);
    const MoveListener = () => {
        if (!target.current) {
          return;
        }
      
        const element = target.current;
        const windowScroll = element.scrollLeft; 
        const totalWidth = element.scrollWidth - element.clientWidth; 
        console.log('element', element);
        console.log('windowscroll', windowScroll);
        console.log('total', totalWidth);
        if (windowScroll === 0) {
          setCount(0);
          return setMoveProgress(0);
        }
      
        if (windowScroll > totalWidth) {
          setCount(100);
          return setMoveProgress(100);
        }
      
        setMoveProgress((windowScroll / totalWidth) * 100);
      }
      useEffect(() => {
        if (window && target.current) {
          target.current.removeEventListener('touchmove', MoveListener);
        } else {
          target.current.addEventListener('touchmove', MoveListener);
        }
      });

        const renderDots = () => {
            const selectedDotValue = (moveProgress * count) / 100;
            console.log('calc scroll', selectedDotValue)
            return children.map( index => (
              <Dot key={index} active={selectedDotValue <= index + 1}/>
            ));
        }
        if (!children) {
            return null;
        }

    return (
        <SliderWrapper>
            <Item ref={target}>
                {children}
            </Item>
            <MoveOnWrapper count={count} target={target}>
                { renderDots() }
            </MoveOnWrapper>
        </SliderWrapper>
    );
}

export default Slider;

