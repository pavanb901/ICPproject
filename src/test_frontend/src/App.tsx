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
import Connective from './components/Connective';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Analytics from './components/Analytics';
import Customization from './components/Customization';
import Demo from './components/Demo';
import Security from './components/Security';
import UpgradePlan from './components/UpgradePlan';
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
          <Route path="/upgrade" element={<UpgradePlan />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Demo/>
              <Features />
              <Customization/>
              <HowItWorks/>
              <Analytics/>
              <Security/>
              <Connective/>
              <Pricing />
              <FAQ/>
              <CTA/>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;