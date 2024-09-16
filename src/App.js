import React from 'react';
import Header from './components/Header';
import OfferSection from './components/OfferSection';
import DescriptionSection from './components/DescriptionSection';
import ServiceSection from './components/ServiceSection';
import RentalSection from './components/RentalSection';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <DescriptionSection />
      <OfferSection />
      <ServiceSection />
      <RentalSection />
    </div>
  );
}

export default App;
