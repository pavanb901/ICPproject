import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, DollarSign, Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    name: 'Real-time Discord alerts',
    description: 'Get instant notifications for critical events directly in your Discord channels.',
    icon: Bell,
  },
  {
    name: 'Buy once, use forever',
    description: 'No monthly subscriptions. Pay once and use AllInfo for as long as you want.',
    icon: DollarSign,
  },
  {
    name: 'Track sales & new users',
    description: 'Monitor important metrics like new sales, user signups, and other key events.',
    icon: Users,
  },
  {
    name: 'Lightning fast setup',
    description: 'Get up and running in minutes with our simple integration process.',
    icon: Zap,
  },
  {
    name: 'Customizable alerts',
    description: 'Choose which events trigger notifications and customize their appearance.',
    icon: Clock,
  },
  {
    name: 'Secure & reliable',
    description: 'Your data is encrypted and our service maintains 99.9% uptime.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to monitor your SaaS
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            AllInfo provides powerful tools to keep you informed about your business in real-time.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </motion.div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
