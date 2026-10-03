import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/mockData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const EnquiryCTA: React.FC = () => {
  const whatsappNumber = COMPANY_INFO.phone?.whatsapp?.replace(/[^0-9]/g, '') || '918102343062';

  return (
    <section className="py-20 bg-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Hexagonal Dark Navy Container Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-[#06142E] text-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl overflow-hidden"
        >
          {/* Subtle Hexagonal Background Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px), radial-gradient(#38BDF8 1px, #06142E 1px)`,
              backgroundSize: `36px 36px`,
              backgroundPosition: `0 0, 18px 18px`
            }}
          />

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Partner With Us?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach out via email or WhatsApp — our team responds within 24 hours to all B2B inquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl transition-all duration-200"
                >
                  <Mail className="w-4 h-4 mr-2 text-sky-600" />
                  <span>Send Email Inquiry</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Torrance Life Science Team! I want to chat about business partnership.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl transition-all duration-200 gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
