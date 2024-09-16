import React from 'react';
import logoImg from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <a href='#main' className="header-logo">
        <img src={logoImg} alt="Logo" />
      </a>
      <nav className="header-nav">
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#rental">Аренда</a>
      </nav>
      <div className="header-contact">
        <button className="contact-button">Связаться</button>
      </div>
    </header>
  );
}

export default Header;
