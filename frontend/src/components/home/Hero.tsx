import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { COMPANY_INFO } from '../../data/mockData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const Hero: React.FC = () => {
  const whatsappNumber = COMPANY_INFO.phone?.whatsapp?.replace(/[^0-9]/g, '') || '918102343062';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' as const } 
    }
  };

  return (
    <section className="relative bg-[#06142E] text-white overflow-hidden py-20 lg:py-28">
      {/* Animated Floating Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-sky-500 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Hexagonal Pattern Overlay Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px), radial-gradient(#38BDF8 1px, #06142E 1px)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}
      />

      {/* Laboratory Background Overlay Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600')` }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8"
      >
        
        {/* Uppercase Category Pill Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>B2B PHARMACEUTICAL PARTNER</span>
          </div>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Advancing Healthcare. <br />
          <span className="text-sky-400">Delivering Trust.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          Torrance Life Science is a trusted B2B pharmaceutical partner supplying hospitals, clinics, and distributors with high-quality medicines across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base shadow-xl shadow-sky-500/20 transition-all duration-200"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Torrance Life Science Team! I want to get in touch regarding commercial partnership.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl shadow-emerald-500/20 transition-all duration-200 gap-2.5"
            >
              <WhatsAppIcon className="w-6 h-6 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};
