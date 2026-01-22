import React, { useState } from "react";
import "./Dashboard.css";
import carImg from "../../assets/img1.jpg";

const Dashboard = () => {
  // State for the buttons
  const [locked, setLocked] = useState(true);
  const [engineOn, setEngineOn] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div className="web-dashboard">
      
      <main className="main-content">
        
        {/* HEADER */}
        <header className="top-header">
          <div className="header-title">
            <h1>Dashboard</h1>
            <p>Welcome back, here is your vehicle status.</p>
          </div>
          {/* Search and Bell removed */}
          <div className="header-actions"></div>
        </header>

        {/* DASHBOARD GRID */}
        <div className="dashboard-grid">
          
          {/* QUICK ACTIONS BOX */}
          <div className="card action-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="action-buttons-container">
              
              {/* LOCK BUTTON */}
              <button 
                className={`quick-btn lock-btn ${locked ? "active" : ""}`} 
                onClick={() => setLocked(!locked)}
              >
                <span className="btn-icon">{locked ? "🔒" : "🔓"}</span>
                <span className="btn-text">{locked ? "Locked" : "Unlocked"}</span>
              </button>

              {/* ENGINE BUTTON */}
              <button 
                className={`quick-btn engine-btn ${engineOn ? "active" : ""}`} 
                onClick={() => setEngineOn(!engineOn)}
              >
                <span className="btn-icon">⚡</span>
                <span className="btn-text">{engineOn ? "Stop Engine" : "Start Engine"}</span>
              </button>

              {/* LIGHTS BUTTON */}
              <button 
                className={`quick-btn light-btn ${lightsOn ? "active" : ""}`} 
                onClick={() => setLightsOn(!lightsOn)}
              >
                <span className="btn-icon">💡</span>
                <span className="btn-text">{lightsOn ? "Lights ON" : "Lights OFF"}</span>
              </button>

            </div>
          </div>

          {/* STAT CARDS ROW */}
          <div className="stat-card">
            <div className="stat-icon red-bg">⚡</div>
            <div className="stat-info">
              <span className="label">Total Power</span>
              <span className="value">500 <small>HP</small></span>
              <span className="trend up">▲ 12% vs last dyno</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon dark-bg">⛽</div>
            <div className="stat-info">
              <span className="label">Fuel Range</span>
              <span className="value">280 <small>MI</small></span>
              <span className="trend">Normal consumption</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon dark-bg">🛣️</div>
            <div className="stat-info">
              <span className="label">Odometer</span>
              <span className="value">12,450 <small>MI</small></span>
              <span className="trend">Next service in 500mi</span>
            </div>
          </div>

          {/* LARGE CHART SECTION */}
          <div className="card large-chart-card">
            <div className="card-header">
              <h3>Performance Analytics</h3>
              <select className="chart-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="css-chart-container">
              <div className="chart-bars">
                <div className="bar" style={{height: '40%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
                <div className="bar" style={{height: '60%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar active" style={{height: '95%'}}></div>
              </div>
              <div className="chart-labels">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </div>

          {/* CAR STATUS CARD */}
          <div className="card car-status-card">
            <div className="card-header">
              <h3>Vehicle Status</h3>
              <span className="status-badge">ONLINE</span>
            </div>
            <div className="car-image-container">
              <img 
                src={carImg} 
                alt="Mustang" 
                style={{ filter: lightsOn ? "brightness(1.3) drop-shadow(0 0 8px white)" : "none", transition: "0.3s" }} 
              />
              <div className="overlay-gradient"></div>
              {locked && <div className="lock-overlay">🔒</div>}
              <div className="car-details">
                <h4>Dark Horse GT</h4>
                <p>VIN: 1FATP8FF45...</p>
              </div>
            </div>
            <div className="health-list">
              <div className="health-item">
                <span>Engine Health</span>
                {/* UPDATED: Width is now 100% */}
                <div className="progress">
                  <div className="fill" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="health-item">
                <span>Brake Pads</span>
                <div className="progress"><div className="fill warning" style={{width: '45%'}}></div></div>
              </div>
              <div className="health-item">
                <span>Tire Wear</span>
                <div className="progress"><div className="fill" style={{width: '80%'}}></div></div>
              </div>
            </div>
          </div>

          {/* DATA TABLE */}
          <div className="card table-card">
            <div className="card-header">
              <h3>Recent Trips</h3>
              <button className="view-all">View All</button>
            </div>
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Route</th>
                  <th>Duration</th>
                  <th>Max Speed</th>
                  <th>Efficiency</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Today, 10:23 AM</td>
                  <td>Home ➝ Office</td>
                  <td>45 min</td>
                  <td>65 MPH</td>
                  <td>18 MPG</td>
                  <td><span className="tag complete">Completed</span></td>
                </tr>
                <tr>
                  <td>Yesterday, 6:15 PM</td>
                  <td>Office ➝ Gym</td>
                  <td>20 min</td>
                  <td>40 MPH</td>
                  <td>22 MPG</td>
                  <td><span className="tag complete">Completed</span></td>
                </tr>
                <tr>
                  <td>Jan 20, 8:00 PM</td>
                  <td>Downtown Loop</td>
                  <td>1h 10m</td>
                  <td>110 MPH</td>
                  <td>12 MPG</td>
                  <td><span className="tag track">Track Mode</span></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;