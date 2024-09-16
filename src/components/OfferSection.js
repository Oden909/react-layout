import React from 'react';
import offerImg from '../assets/offer.png'

const OfferSection = () => {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <h1>Что мы предлагаем</h1>
        <p>
          В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. 
          Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.
        </p>
      </div>
      <div className="offer-image">
        <img src={offerImg} alt="Что мы предлагаем" />
      </div>
    </section>
  );
}

export default OfferSection;
