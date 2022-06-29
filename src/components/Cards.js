import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
  return (
    <div className = 'cards'>
        <h1> Check out wow</h1>
        <div className = 'card__container'>
            <div className = 'cards_wrapper'>
                <div className = 'cards__item'>
                    <CardItem 
                    src = "images/img-9.img"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cards