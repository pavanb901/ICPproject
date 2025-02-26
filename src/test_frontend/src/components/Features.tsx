import React from 'react';
import { Bell, BarChart2, Users, CreditCard, Clock } from 'lucide-react';

const features = [
  {
    name: 'Real-time Discord alerts',
    description: 'Get instant notifications in your Discord channels for all critical events in your SaaS product.',
    icon: Bell,
  },
  {
    name: 'Track sales',
    description: 'Monitor revenue and get notified whenever a new sale is made or a subscription is renewed.',
    icon: CreditCard,
  },
  {
    name: 'User activity monitoring',
    description: 'Stay informed about new sign-ups, user engagement, and other important user activities.',
    icon: Users,
  },
  {
    name: 'Financial updates',
    description: 'Track your financial metrics in real-time with detailed reports and instant alerts.',
    icon: BarChart2,
  },
  {
    name: 'Buy once, use forever',
    description: 'No monthly subscriptions. Purchase once and use AllInfo forever with your SaaS products.',
    icon: Clock,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to monitor your SaaS
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AllInfo provides comprehensive monitoring and alerting capabilities to help you stay on top of your SaaS business.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;