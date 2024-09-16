import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-texts">
        <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
        <p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
      </div>
      <div className="service-items">
        <ServiceItem title="Годовое ТО" backgroundColor="#22356F" />
        <ServiceItem title="Выравнивание колес" backgroundColor="#0052C1" />
        <ServiceItem title="Настройка переключателей" backgroundColor="#76B58B" />
      </div>
    </section>
  );
}

export default ServiceSection;
