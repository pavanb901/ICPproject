import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Twitter, Github as GitHub, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Bell className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">AllInfo</span>
            </motion.div>
            <p className="mt-4 text-gray-300">
              Real-time SaaS insights delivered directly to your Discord. Monitor your business metrics effortlessly.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-6">
              {[
                { icon: Twitter, label: "Twitter", link: "#" },
                { icon: GitHub, label: "GitHub", link: "#" },
                { icon: Mail, label: "Email", link: "#" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  className="text-gray-400 hover:text-gray-300"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: [
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Pricing", href: "#pricing" },
                { name: "API", href: "#" }
              ]
            },
            {
              title: "Company",
              links: [
                { name: "About", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#" }
              ]
            }
          ].map((section, index) => (
            <motion.div key={section.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + index * 0.1 }}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <motion.li key={link.name} whileHover={{ scale: 1.1 }}>
                    <a href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div className="mt-12 border-t border-gray-700 pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} AllInfo. All rights reserved Build by Ujjwal Sinha.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
