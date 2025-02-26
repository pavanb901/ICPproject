import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Navbar;