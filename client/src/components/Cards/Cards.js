import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { card1, card2, card3, card4 } from './data';

const Cards = () => {
    return (
        <div className='cards'>
            <div className = 'cards__container'>
                <div className='cards__wrapper'>
                        <CardItem 
                            src={require('../../assets/images/pexels-cottonbro-4107097.jpg')}
                            alt='Cleaning image 1'
                            title={card1.title}
                            desc={card1.desc}
                            label={'$'+card1.price+'/hr'}
                        />
                        <CardItem 
                            src={require('../../assets/images/pexels-cottonbro-4108772.jpg')}
                            alt='Cleaning image 2'
                            title={card2.title}
                            desc={card2.desc}
                            label={'$'+card2.price+'/hr'}
                        />
                        <CardItem 
                            src={require('../../assets/images/pexels-cottonbro-4112727.jpg')}
                            alt='Cleaning image 3'
                            title={card3.title}
                            desc={card3.desc}
                            label={'$'+card3.price+'/hr'}
                        />
                        <CardItem 
                            src={require('../../assets/images/pexels-cottonbro-4107120.jpg')}
                            alt='Cleaning image 4'
                            title={card4.title}
                            desc={card4.desc}
                            label={'$'+card4.price+'/hr'}
                        />
                </div>
            </div>
        </div>
    );
}

export default Cards;
