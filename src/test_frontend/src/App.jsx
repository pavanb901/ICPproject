import React, { useState } from "react";

function App() {
  // Mock data for the dashboard
  const [businessMetrics] = useState({
    sales: 12000,
    users: 1500,
    funding: 500000,
  });

  const [recentActivity] = useState([
    { id: 1, type: "Sale", amount: 1200, date: "2023-10-01" },
    { id: 2, type: "User Signup", amount: 50, date: "2023-10-02" },
    { id: 3, type: "Funding", amount: 100000, date: "2023-10-03" },
  ]);

  const [notifications] = useState([
    { id: 1, message: "New sale recorded", date: "2023-10-01" },
    { id: 2, message: "User signup increased by 10%", date: "2023-10-02" },
    { id: 3, message: "Funding round completed", date: "2023-10-03" },
  ]);

  const [chartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    sales: [1200, 1900, 3000, 5000, 2000, 3000],
    users: [100, 200, 300, 400, 500, 600],
  });

  return (
    <div className="app">
      <h1>Business Dashboard</h1>

      {/* Business Overview */}
      <div className="section">
        <h2>Business Overview</h2>
        <div className="metrics">
          <div className="metric">
            <h3>Sales</h3>
            <p>${businessMetrics.sales.toLocaleString()}</p>
          </div>
          <div className="metric">
            <h3>Users</h3>
            <p>{businessMetrics.users.toLocaleString()}</p>
          </div>
          <div className="metric">
            <h3>Funding</h3>
            <p>${businessMetrics.funding.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="section">
        <h2>Recent Activity</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.type}</td>
                <td>${activity.amount.toLocaleString()}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts */}
      <div className="section">
        <h2>Charts</h2>
        <div className="charts">
          <div className="chart">
            <h3>Sales Over Time</h3>
            <div className="bar-chart">
              {chartData.sales.map((value, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{ height: `${value / 50}px` }}
                >
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="labels">
              {chartData.labels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>
          <div className="chart">
            <h3>Users Over Time</h3>
            <div className="bar-chart">
              {chartData.users.map((value, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{ height: `${value}px` }}
                >
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="labels">
              {chartData.labels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="section">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              <strong>{notification.message}</strong> - {notification.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;