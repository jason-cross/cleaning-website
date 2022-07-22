import React from 'react';
import './CardItem.css';

const CardItem = (props) => {
    console.log(props.desc);
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
                        <div className='cards__item__title'>
                            <h2>{props.title}</h2>
                        </div>
                        <div className='cards__item__desc'>
                            {props.desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardItem;