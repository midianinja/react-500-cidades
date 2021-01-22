import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SliderWrapper, Card, MoveLeft, MoveRight } from './sliderCustom.style';

function Slider({items}) {
    // let sliderArr = Array(6).fill(<CardUsers />, 0, 6);

    const [x, setX] = useState(0);
    const moveLeft = () => {
        x === 0 ? setX(-100 * (items.length -1)) : setX(x + 100);
    };
    const moveRight = () => {
        x === -100 * (items.length -1) ? setX(0) : setX(x - 100);
    };
    console.log(items);

    return(
        <SliderWrapper>
            {items.map((Item, index) => {
                return(
                    <Card key={index} style={{transform: `translateX(${x}%)` }}>
                        <Item />
                    </Card>
                )
            })}
            <MoveLeft onClick={moveLeft} />
            <MoveRight onClick={moveRight} />
        </SliderWrapper>
    );
}
Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};
Slider.defaultProps = { items : [] };

export default Slider;