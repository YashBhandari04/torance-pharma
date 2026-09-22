import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, ArrowRight, Activity, 
  Sparkles, CheckCircle2, Globe2, Building
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pharma-hero-bg pt-12 pb-24 border-b border-slate-200">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>Leading WHO-GMP Certified Pharmaceutical Innovator</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Quality Medication, <br className="hidden sm:inline" />
              <span className="text-gradient">Crafted with Care</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              TORRANCE LIFE SCIENCE PVT. LTD. develops, manufactures, and markets high-potency ethical pharmaceuticals across 17 therapeutic categories.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Medicine Catalog</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Distributor & PCD Franchise</span>
              </Link>
            </div>

            {/* Quick Value Checks */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>79+ Approved Formulations</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/60 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>WHO-GMP & ISO Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/60 shadow-xs col-span-2 sm:col-span-1">
                <Globe2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Pan-India Distribution</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive Badge Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-4/3 sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200"
                  alt="Torrance Life Science Pharmaceutical Laboratory"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                
                {/* Overlay Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Quality First</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                      ACTIVE R&D
                    </span>
                  </div>
                  <h3 className="text-base font-bold">Standardized Formulation Excellence</h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Every batch undergoes rigorous HPLC analytical validation & bio-equivalence screening.
                  </p>
                </div>
              </div>

              {/* Top-Right Badge Float */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-3 p-3.5 rounded-2xl bg-white shadow-xl border border-slate-100 animate-float">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Standards</div>
                  <div className="text-sm font-bold text-slate-900">100% Compliant</div>
                </div>
              </div>

              {/* Bottom-Left Badge Float */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-3 p-3.5 rounded-2xl bg-white shadow-xl border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Network</div>
                  <div className="text-sm font-bold text-slate-900">500+ Franchise Partners</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Corporate Metrics Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/50 border border-slate-200/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">{COMPANY_INFO.stats.productsCount}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Formulations</div>
          </div>
          <div className="p-4 rounded-xl bg-white/50 border border-slate-200/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-600">{COMPANY_INFO.stats.distributors}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Pan-India Distributors</div>
          </div>
          <div className="p-4 rounded-xl bg-white/50 border border-slate-200/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600">{COMPANY_INFO.stats.therapeuticSegments}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Therapeutic Segments</div>
          </div>
          <div className="p-4 rounded-xl bg-white/50 border border-slate-200/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">WHO-GMP</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Certified Manufacturing</div>
          </div>
        </div>

      </div>
    </section>
  );
};
