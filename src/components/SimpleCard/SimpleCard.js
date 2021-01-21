import React from 'react';
import { Card, DateEvent, Title, Place } from './simpleCard.style';


function SimpleCard() {
    const data = JSON.parse(this.props.cardData);
    return(
        <Card>
            <img src={data.dataEvent1.img} alt={data.dataEvent1.description} />
            <DateEvent>{data.dataEvent1.dateEvent}</DateEvent>
            <Title>{data.dataEvent1.titleEvent}</Title>
            <Place>{data.dataEvent1.placeEvent}</Place>
        </Card>
    );
}

export default SimpleCard;