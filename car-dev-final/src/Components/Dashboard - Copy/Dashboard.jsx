import React from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import SpecsTable from './components/SpecsTable';
import ImageBackground from './ImageBackground';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="main-content">
        <header className="top-bar">
          <h1>Overview</h1>
          <button className="cta-btn">Test Drive</button>
        </header>

        <ImageBackground />

        <div className="stats-grid">
          <StatCard title="Max Power" value="500" unit="HP" icon="⚡" />
          <StatCard title="Top Speed" value="163" unit="MPH" icon="🏁" />
          <StatCard title="0-60 MPH" value="3.7" unit="SEC" icon="⏱️" />
          <StatCard title="Torque" value="418" unit="LB-FT" icon="⚙️" />
        </div>

        <div className="content-grid">
          <div className="specs-section">
            <SpecsTable />
          </div>
          {/* You could add a chart or map here later */}
          <div className="placeholder-card">
            <h3>Engine Mapping</h3>
            <div className="fake-graph"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;