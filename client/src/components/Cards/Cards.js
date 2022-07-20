import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = ()=>  {
    return (
        <div className='cards'>
            <h1 className='cards__H1'>What do I offer!</h1>
            <div className = 'cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;