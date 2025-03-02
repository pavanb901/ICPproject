import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bell, BarChart2, Users, CreditCard, ArrowRight, Check, Github, Disc as Discord } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import DiscordChannels from './components/DiscordChannels';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discord-channels" element={<DiscordChannels />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Features />
              <HowItWorks/>
              <Pricing />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;