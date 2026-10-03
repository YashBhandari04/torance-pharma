import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What pharmaceutical products does Torrance Life Science supply?',
      answer: 'Torrance Life Science supplies over 79+ high-potency formulations across 17 therapeutic categories including Tablets, Capsules, Sterile Injectables, Oral Syrups & Suspensions, Dry Powders, and Topical Ointments.'
    },
    {
      question: 'Which states does Torrance Life Science distribute medicines to?',
      answer: 'We have a robust Pan-India distribution network supplying products across 20+ state territories including Uttar Pradesh, Haryana, Delhi-NCR, Gujarat, Maharashtra, Bihar, Jharkhand, and Southern India.'
    },
    {
      question: 'How can I place a bulk medicine order?',
      answer: 'You can submit your commercial inquiry via our online Business Enquiry form, email us directly at enquiry@torancelifescience.com, or chat with our Sales Desk via WhatsApp at +91 81023 43062.'
    },
    {
      question: 'Is Torrance Life Science WHO-GMP certified?',
      answer: 'Yes. All formulations marketed by Torrance Life Science are manufactured exclusively in WHO-GMP certified and ISO 9001:2015 accredited facilities adhering to strict DCGI and CDSCO quality norms.'
    },
    {
      question: 'Does Torrance Life Science supply medicines to hospitals and clinics?',
      answer: 'Yes. We cater to government & private hospital supply tenders, PCD franchise distributors, stockists, and institutional healthcare facilities across India.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about Torrance Life Science
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 ${
                        isOpen ? 'text-sky-600' : 'text-slate-500'
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
