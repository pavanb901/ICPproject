import React from "react";

const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <form>
        <label>
          Business Name:
          <input type="text" placeholder="Enter business name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter email" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;