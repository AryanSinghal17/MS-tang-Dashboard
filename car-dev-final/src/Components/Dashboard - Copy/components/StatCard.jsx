import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, unit, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-body">
        <h3 className="stat-value">{value}</h3>
        <span className="stat-unit">{unit}</span>
      </div>
    </div>
  );
};

export default StatCard;