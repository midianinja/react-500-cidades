import React, { useState, useEffect } from 'react';
import { SliderWrapper, Item, MoveOnWrapper, Dot, } from './sliderCustom.style';

const Slider = ({ children }) => {
    const target = React.createRef();
    const [ count, setCount ] = useState(0);
    const [ moveProgress, setMoveProgress] = useState(0);
    console.log('qual seu valor', moveProgress);
    console.log('count qual seu valor', count);
    console.log('children qual seu valor', children);
    const MoveListener = () => {
        // console.log('aqui', target.current);
        if (!target.current) {
          return;
        }
      
        const element = target.current;
        const windowScroll = element.scrollLeft; 
        const totalWidth = element.scrollWidth - element.clientWidth; 
        if (windowScroll === 0) {
          return setMoveProgress(0);
        }
      
        if (windowScroll > totalWidth) {
          return setMoveProgress(100);
        }
      
        setMoveProgress((windowScroll / totalWidth) * 100);
      }
      useEffect(() => {
        if (window && target.current) {
            target.current.addEventListener('touchmove', MoveListener);
        }
      });

        const renderDots = () => {
            const selectedDotValue = (moveProgress * count) / 100;
            console.log('cria pontinhoss', selectedDotValue);
            return children.map( index => (
              <Dot key={index} active={selectedDotValue >= index && selectedDotValue <= index + 1}/>
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
//     let sliderArr = Array(5).fill(<SimpleCard />, 0, 5)
//     const generateDots = () => {
//         let dotHolders = [];
//         for (let i = 0; i < sliderArr.length; i++) {
//             dotHolders.push(<Dot />);
//         }
//         return dotHolders;
//     };
//     const [x, setX] = useState(0);
//     const moveLeft = () => {
//         x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
//     };
//     const moveRight = () => {
//         x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
//     };

//     return(
//         <SliderWrapper>
            // {sliderArr.map((item, index) => {
            //     return(
            //         <Item key={index} style={{transform: `translateX(${x}%)` }}>
            //             {item}
            //         </Item>
            //     )
            // })}
//             <MoveOnWrapper>
//                     <DotHolders>
//                         <Dot />
//                     </DotHolders>
//             </MoveOnWrapper>
//             {/* <MoveLeft onClick={moveLeft} />
//             <MoveRight onClick={moveRight} /> */}
//         </SliderWrapper>
//     );
}

export default Slider;
