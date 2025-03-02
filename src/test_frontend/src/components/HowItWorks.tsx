import React from 'react';
import { motion } from 'framer-motion';
import img1 from "./dashboardimage.png"
const steps = [
  {
    id: '01',
    title: 'Connect your Discord server',
    description: 'Add the AllInfo bot to your Discord server with just a few clicks.',
    image: img1,
  },
  {
    id: '02',
    title: 'Integrate with your SaaS',
    description: 'Use our simple API or integrations to connect your SaaS product.',
    image: img1,
  },
  {
    id: '03',
    title: 'Configure your alerts',
    description: 'Choose which events trigger notifications and customize their appearance.',
    image: img1,
  },
  {
    id: '04',
    title: 'Start receiving notifications',
    description: 'Get real-time alerts in your Discord channels whenever important events occur.',
    image: img1,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple setup, powerful results
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow these easy steps to integrate AllInfo with your Discord server and start receiving instant updates.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-lg shadow-md" />
              <div className="mt-6">
                <span className="text-indigo-600 text-lg font-semibold">{step.id}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
