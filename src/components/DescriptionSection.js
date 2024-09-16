import React from 'react';
import descriptionImg from '../assets/dino.png'

const DescriptionSection = () => {
  return (
    <section className="description-section">
      <div className="description-content">
        <h1>Веломастерская “Велозар”</h1>
        <p>
          Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. 
          Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
        </p>
      </div>
      <div className="description-image">
        <img src={descriptionImg} alt="dino" />
      </div>
    </section>
  );
}

export default DescriptionSection;

