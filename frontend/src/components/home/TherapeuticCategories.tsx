import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Syringe, FlaskConical, TestTube } from 'lucide-react';
import { motion } from 'framer-motion';

export const TherapeuticCategories: React.FC = () => {
  const portfolioRanges = [
    {
      title: 'Tablets & Capsules',
      slug: 'tablets-capsules',
      icon: Pill,
      description: 'Oral solid dosage forms manufactured under strict GMP standards for consistent efficacy and safety.'
    },
    {
      title: 'Injections',
      slug: 'injections',
      icon: Syringe,
      description: 'Sterile injectable solutions and suspensions for critical care, hospitals, and clinical settings.'
    },
    {
      title: 'Syrups & Suspensions',
      slug: 'syrups-suspensions',
      icon: FlaskConical,
      description: 'Liquid oral formulations for paediatric and adult use, available in a wide therapeutic range.'
    },
    {
      title: 'Ointments & Creams',
      slug: 'ointments-creams',
      icon: TestTube,
      description: 'Topical preparations for dermatological and wound-care applications with proven formulations.'
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Pharmaceutical Range
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From essential generics to specialty formulations — we supply what healthcare demands.
          </p>
        </motion.div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioRanges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(item.slug)}`}
                  className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-5">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-[#091E42] text-white flex items-center justify-center shadow-md group-hover:bg-sky-600 transition-colors"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
