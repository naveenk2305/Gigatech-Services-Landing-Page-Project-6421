import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiCode, FiUsers, FiTrendingUp, FiGlobe } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Built for speed with cutting-edge optimization techniques and modern architecture.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: FiCode,
      title: 'Developer First',
      description: 'Comprehensive APIs, SDKs, and documentation for seamless integration.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools that keep your team in sync and productive.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Analytics & Insights',
      description: 'Powerful analytics dashboard with actionable insights and reporting.',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: FiGlobe,
      title: 'Global Scale',
      description: 'Worldwide infrastructure ensuring low latency and high availability.',
      gradient: 'from-teal-400 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> succeed</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to build, 
            scale, and manage your digital products with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <SafeIcon icon={feature.icon} className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;