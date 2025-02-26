import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="metrics">
        <div className="metric">
          <h3>Sales</h3>
          <p>$12,000</p>
        </div>
        <div className="metric">
          <h3>Users</h3>
          <p>1,500</p>
        </div>
        <div className="metric">
          <h3>Funding</h3>
          <p>$500,000</p>
        </div>
      </div>
      <div className="chart">
        <h2>Sales Over Time</h2>
        <img src="https://via.placeholder.com/800x300" alt="Chart" />
      </div>
    </div>
  );
};

export default Dashboard;