import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/ Sidebar";
import Navbar from "./components/ Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/ Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function  App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;