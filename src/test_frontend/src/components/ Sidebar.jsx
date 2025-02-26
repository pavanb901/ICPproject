import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://via.placeholder.com/150" alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/">
            <HomeIcon />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <AnalyticsIcon />
            <span>Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <SettingsIcon />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;