import React from 'react';
import { ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const QualityCommitment: React.FC = () => {
  const features = [
    {
      title: 'Quality Assurance',
      icon: ShieldCheck,
      description: 'Every product is manufactured in WHO-GMP certified facilities with stringent quality control at every stage.'
    },
    {
      title: 'Wide Distribution',
      icon: Truck,
      description: 'Pan-India distribution network ensuring timely delivery to hospitals, clinics, and stockists across 20+ states.'
    },
    {
      title: 'Regulatory Compliance',
      icon: CheckCircle2,
      description: 'Full compliance with CDSCO, WHO-GMP, and ISO standards — documentation and certifications available on request.'
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built on Quality. Driven by Compliance.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We combine rigorous quality standards with wide distribution reach to be your most reliable pharmaceutical partner.
          </p>
        </motion.div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center space-y-5"
              >
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-[#091E42] text-white flex items-center justify-center shadow-md"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
