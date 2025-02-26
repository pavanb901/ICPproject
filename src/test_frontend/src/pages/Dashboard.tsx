import React, { useState } from "react";
import { BarChart2, Users, DollarSign, RefreshCcw, PlugZap, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  type IntegrationKey = "discord" | "slack" | "github";

  const [metrics, setMetrics] = useState([
    { id: 1, name: "Monthly Revenue", value: "$5,000", icon: <DollarSign className="h-10 w-10 text-indigo-600" /> },
    { id: 2, name: "Active Users", value: "1,200", icon: <Users className="h-10 w-10 text-indigo-600" /> },
    { id: 3, name: "New Signups", value: "200", icon: <BarChart2 className="h-10 w-10 text-indigo-600" /> },
  ]);

  const [apiKey, setApiKey] = useState("********-****-****-****");
  const [plan, setPlan] = useState("Professional");

  const [integrations, setIntegrations] = useState<Record<IntegrationKey, boolean>>({
    discord: false,
    slack: false,
    github: false,
  });

  const regenerateApiKey = () => {
    const newApiKey = `API-${Math.random().toString(36).substr(2, 16)}`;
    setApiKey(newApiKey);
  };

  const upgradePlan = () => {
    setPlan(plan === "Professional" ? "Enterprise" : "Professional");
  };

  const toggleIntegration = (service: IntegrationKey) => {
    setIntegrations((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  // Chart Data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [2000, 3000, 3500, 4500, 5000, 6000],
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Business Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            className="p-6 bg-white shadow-lg rounded-xl flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            {metric.icon}
            <div>
              <p className="text-lg font-semibold">{metric.name}</p>
              <p className="text-2xl font-bold text-gray-700">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Revenue Chart */}
      <section className="mt-8 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Revenue Growth</h2>
        <Line data={chartData} />
      </section>

      {/* API Management */}
      <section className="mt-8 p-6 bg-white shadow-lg rounded-xl flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">API Management</h2>
          <p className="text-gray-600 mt-2">Your API Key:</p>
          <div className="mt-2 bg-gray-100 p-3 rounded-md inline-block">{apiKey}</div>
        </div>
        <motion.button
          onClick={regenerateApiKey}
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center space-x-2 hover:bg-blue-700"
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCcw className="w-5 h-5" />
          <span>Regenerate Key</span>
        </motion.button>
      </section>

      {/* Subscription Plan */}
      <section className="mt-8 p-6 bg-white shadow-lg rounded-xl flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Subscription Plan</h2>
          <p className="mt-2 text-lg font-bold text-indigo-600">{plan}</p>
        </div>
        <motion.button
          onClick={upgradePlan}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          whileTap={{ scale: 0.95 }}
        >
          {plan === "Professional" ? "Upgrade to Enterprise" : "Downgrade to Professional"}
        </motion.button>
      </section>

      {/* App Integrations */}
      <section className="mt-8 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(integrations).map((service) => (
            <motion.div
              key={service}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <PlugZap className="h-6 w-6 text-indigo-600" />
                <span className="capitalize font-medium">{service}</span>
              </div>
              <button
                onClick={() => toggleIntegration(service as IntegrationKey)}
                className={`px-3 py-1 rounded-md ${
                  integrations[service as IntegrationKey] ? "bg-red-600 text-white" : "bg-blue-600 text-white"
                }`}
              >
                {integrations[service as IntegrationKey] ? "Disconnect" : "Connect"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manage Business Metrics Button */}
      <div className="mt-8">
        <motion.button
          onClick={() => navigate("/manage-metrics")}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg flex items-center space-x-2 hover:bg-indigo-700"
          whileTap={{ scale: 0.95 }}
        >
          <PlusCircle className="w-5 h-5" />
          <span>Manage Business Metrics</span>
        </motion.button>
      </div>

      {/* Back to Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>
    </div>
  );
};

export default Dashboard;
