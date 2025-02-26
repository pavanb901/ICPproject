import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start monitoring your SaaS with AllInfo today. Simple, transparent pricing.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Starter</h2>
              <p className="mt-4 text-sm text-gray-500">Perfect for small SaaS businesses just getting started.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$49</span>
                <span className="text-base font-medium text-gray-500">/one-time</span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >
                Buy Starter
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
              <ul className="mt-6 space-y-4">
                {['Up to 3 Discord channels', 'Basic event notifications', 'Sales alerts', 'New user notifications', 'Email support'].map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Professional</h2>
              <p className="mt-4 text-sm text-gray-500">For growing SaaS businesses with more advanced needs.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$99</span>
                <span className="text-base font-medium text-gray-500">/one-time</span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full bg-indigo-600 border border-indigo-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700"
              >
                Buy Professional
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Up to 10 Discord channels',
                  'Advanced event notifications',
                  'Custom notification templates',
                  'Financial alerts',
                  'User activity monitoring',
                  'Priority email support',
                ].map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Enterprise</h2>
              <p className="mt-4 text-sm text-gray-500">For large SaaS businesses with complex requirements.</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$199</span>
                <span className="text-base font-medium text-gray-500">/one-time</span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >
                Buy Enterprise
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Unlimited Discord channels',
                  'Advanced event notifications',
                  'Custom notification templates',
                  'Financial alerts',
                  'User activity monitoring',
                  'Custom integrations',
                  'Dedicated support',
                  'API access',
                ].map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;