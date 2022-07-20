import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../../assets/images/pexels-cottonbro-4107097.jpg';
import img2 from '../../assets/images/pexels-cottonbro-4108772.jpg';
import img3 from '../../assets/images/pexels-cottonbro-4112727.jpg';
import img4 from '../../assets/images/pexels-cottonbro-4107120.jpg';

const Cards = () => {
    return (
        <div className='cards'>
            <div className = 'cards__container'>
                <div className='cards__wrapper'>
                        <CardItem 
                            src={img1}
                            alt='Cleaning image 1'
                            text='General Cleaning'
                            label='$35/hr'
                            path='/services'
                        />
                        <CardItem 
                            src={img2}
                            alt='Cleaning image 2'
                            text='Deep Clean'
                            label='$40/hr'
                            path='/services'
                        />
                        <CardItem 
                            src={img3}
                            alt='Cleaning image 3'
                            text='Organise and Declutter'
                            label='$30/hr'
                            path='/services'
                        />
                        <CardItem 
                            src={img4}
                            alt='Cleaning image 4'
                            text='Vacate Clean'
                            label='$45/hr'
                            path='/services'
                        />
                </div>
            </div>
        </div>
    );
}

export default Cards;