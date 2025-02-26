import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SyncIcon from "@mui/icons-material/Sync";
import HelpIcon from "@mui/icons-material/Help";

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
          <Link to="/products">
            <ShoppingCartIcon />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <PeopleIcon />
            <span>Customers</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <AssignmentIcon />
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <AnalyticsIcon />
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/team">
            <PeopleIcon />
            <span>Team</span>
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <CalendarTodayIcon />
            <span>Calendar</span>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <EmailIcon />
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <NotificationsIcon />
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link to="/integrations">
            <SyncIcon />
            <span>Integrations</span>
          </Link>
        </li>
        <li>
          <Link to="/support">
            <HelpIcon />
            <span>Support</span>
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