import React from 'react';

export const Section = ({ children, isBeige, label, title, center = false }) => {
  const containerClass = isBeige ? "section-beige" : "section";
  const innerClass = isBeige ? "section-inner" : "";
  
  return (
    <div className={containerClass} style={{ textAlign: center ? 'center' : 'left' }}>
      <div className={innerClass}>
        {label && <span className="label">{label}</span>}
        {title && <h2 className="heading-2">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export const InfoCard = ({ label, children }) => (
  <div className="card">
    <span className="card-label">{label}</span>
    <div className="card-content">{children}</div>
  </div>
);