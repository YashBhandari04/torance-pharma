import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, ShieldCheck, Mail, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const EnquiryCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30 inline-block">
                Partnership Opportunities
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Expand Your Pharmaceutical Business with Torance
              </h2>

              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                We are actively appointing PCD Franchise Distributors, Third-Party Contract Manufacturing partners, and Hospital Suppliers across all state territories.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300 pt-2">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Monopoly Rights Available</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Promotional Support Material</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Timely Batch Deliveries</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Submit Business Inquiry</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phone.sales}`}
                className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-sky-400" />
                <span>Call Sales: {COMPANY_INFO.phone.sales}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
