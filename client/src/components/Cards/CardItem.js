import React from 'react';
import './CardItem.css';

const CardItem = (props) => {
    return (
        <>
            <div className='cards__item'>
                <div className='cards__item__div' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img 
                            className='cards__item__img'
                            src={props.src} 
                            alt={props.alt}  
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardItem;