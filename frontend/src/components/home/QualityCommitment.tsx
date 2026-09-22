import React from 'react';
import { ShieldCheck, Award, Microscope, Truck, FileCheck, Layers } from 'lucide-react';

export const QualityCommitment: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-8 h-8 text-sky-500" />,
      title: 'WHO-GMP Compliant Manufacturing',
      desc: 'State-of-the-art HVAC air filtration, cleanroom environments, and automated liquid/solid dosage processing lines.'
    },
    {
      icon: <Microscope className="w-8 h-8 text-purple-500" />,
      title: 'Advanced Analytical Labs',
      desc: 'Equipped with High-Performance Liquid Chromatography (HPLC), UV-Vis Spectrophotometers, and Stability Testing Chambers.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-emerald-500" />,
      title: 'Total Quality Assurance (TQA)',
      desc: '100% Raw Material Identity Assay, In-Process Quality Checks (IPQA), and Final Batch Certificate of Analysis (CoA).'
    },
    {
      icon: <Truck className="w-8 h-8 text-indigo-500" />,
      title: 'Cold-Chain & Logistics Integrity',
      desc: 'Strict temperature-monitored storage and protective tamper-evident Alu-Alu and blister packaging.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Radial Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-950 text-sky-400 text-xs font-semibold border border-sky-800">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Uncompromised Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Quality Assurance Framework
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            At Torance Life Science, quality is embedded at every stage of development — from API synthesis verification to final packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl glass-dark border border-slate-800 hover:border-sky-500/50 transition-all duration-300 space-y-4"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 w-fit border border-slate-700">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
