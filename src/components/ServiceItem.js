import React from 'react';

const ServiceItem = ({ title, backgroundColor }) => {
  return (
    <div className="service-item" style={{ backgroundColor }}>
      <div className="service-item-stripe"></div>
      <p className="service-item-text">{title}</p>
    </div>
  );
}

export default ServiceItem;
