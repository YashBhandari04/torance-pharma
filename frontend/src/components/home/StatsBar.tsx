import React from 'react';
import { motion } from 'framer-motion';

export const StatsBar: React.FC = () => {
  const stats = [
    { value: '10+', label: 'YEARS OF EXCELLENCE' },
    { value: '500+', label: 'PRODUCTS AVAILABLE' },
    { value: '1000+', label: 'CLIENTS SERVED' },
    { value: '20+', label: 'STATES COVERED' },
  ];

  return (
    <section className="bg-sky-600 text-white py-12 border-y border-sky-500 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="space-y-1 cursor-default"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-xs">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-sky-100 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
