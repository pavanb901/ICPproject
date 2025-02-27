import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Connect your Discord server',
    description: 'Add the AllInfo bot to your Discord server with just a few clicks.',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '02',
    title: 'Integrate with your SaaS',
    description: 'Use our simple API or integrations to connect your SaaS product.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '03',
    title: 'Configure your alerts',
    description: 'Choose which events trigger notifications and customize their appearance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '04',
    title: 'Start receiving notifications',
    description: 'Get real-time alerts in your Discord channels whenever important events occur.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-lg shadow-md" />
              <div className="mt-6">
                <span className="text-indigo-600 text-lg font-semibold">{step.id}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
