import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to transform
            <br />
            your ideas?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who are already building the future. 
            Start your journey today with our free trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Start Free Trial</span>
              <SafeIcon 
                icon={FiArrowRight} 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
            >
              Schedule Demo
            </motion.button>
          </div>

          <div className="pt-8 text-blue-100">
            <p className="text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;