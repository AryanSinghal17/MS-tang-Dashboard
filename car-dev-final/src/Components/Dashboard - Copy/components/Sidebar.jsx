import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>MT-<span className="red-text">TANG</span></h2>
      </div>
      <nav className="nav-menu">
        <a href="#dashboard" className="nav-item active">Dashboard</a>
        <a href="#performance" className="nav-item">Performance</a>
        <a href="#specs" className="nav-item">Specs</a>
        <a href="#gallery" className="nav-item">Gallery</a>
        <a href="#settings" className="nav-item">Settings</a>
      </nav>
      <div className="sidebar-footer">
        <p>Mustang GT 2024</p>
      </div>
    </div>
  );
};

export default Sidebar;