import React, { useState, useEffect } from 'react';
import { SliderWrapper, Item, MoveOnWrapper, Dot, } from './sliderCustom.style';

const Slider = ({ children }) => {
    const target = React.createRef();

    const [x, setX] = useState(0);
    const [itemSelected, setItemSelected] = useState(0);
    const moveLeft = () => {
        x === 0 ? setX(-100 * (children.length -1)) : setX(x + 100);
    };
    const moveRight = () => {
        x === -100 * (children.length -1) ? setX(0) : setX(x - 100);
    };

    const onclickfunction = (index) => {
      setX(index * -100);
      setItemSelected(index);
    };


    const [ count, setCount ] = useState(0);
    const [ moveProgress, setMoveProgress] = useState(0);
    const moveListener = () => {
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
        console.log('element', element);
        console.log('windowscroll', windowScroll);
        console.log('total', totalWidth);
        setMoveProgress((windowScroll / totalWidth) * 100);
      }
      useEffect(() => {
        if (window && target.current) {
          target.current.removeEventListener('mousemove', moveListener);

        } else {
          target.current.addEventListener('mousemove', moveListener);
        }
      });



    return (
      <SliderWrapper>
          <Item ref={target} style={{transform: `translateX(${x}%)` }}>
              { children }
          </Item>
          <MoveOnWrapper>
          {children.map((item, index) => {
              return(
                  <Dot key={`${index}-dot`} onClick={() => onclickfunction(index)} />
              )
          })}
          </MoveOnWrapper>
        </SliderWrapper>
    );
}

export default Slider;

