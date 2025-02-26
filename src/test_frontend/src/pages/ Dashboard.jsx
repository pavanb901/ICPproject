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
        <div className="metric">
          <h3>Orders</h3>
          <p>120</p>
        </div>
        <div className="metric">
          <h3>Revenue</h3>
          <p>$50,000</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <h2>Sales Over Time</h2>
          <img src="https://via.placeholder.com/800x300" alt="Sales Chart" />
        </div>
        <div className="chart">
          <h2>User Growth</h2>
          <img src="https://via.placeholder.com/800x300" alt="User Growth Chart" />
        </div>
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>New order #1234 received</li>
          <li>User John Doe signed up</li>
          <li>Product "XYZ" added to inventory</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;