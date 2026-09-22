import React from 'react';
import { ShieldCheck, Award, Building2, Target, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const About: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Torrance Life Science
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A trusted pharmaceutical manufacturer driven by patient safety, clinical efficacy, and advanced formulation chemistry.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              To become a globally recognized pharmaceutical leader delivering high-potency, affordable, and evidence-backed therapeutic formulations that enhance healthcare outcomes across emerging markets.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              To uphold rigorous WHO-GMP manufacturing standards, maintain transparent ethical partnerships with healthcare providers, and continuously innovate formulation delivery systems to fight critical diseases.
            </p>
          </div>
        </div>

        {/* Facilities & Infrastructure */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-extrabold">Manufacturing & Quality Infrastructure</h2>
            <p className="text-slate-400 text-sm">Our WHO-GMP compliant facilities represent the gold standard in pharmaceutical engineering.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
              <h3 className="font-bold text-white">Cleanroom Class A-D</h3>
              <p className="text-slate-400 text-xs">ISO 14644 sterile environments for liquid injectables & oral solids.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <Award className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white">GLP Testing Labs</h3>
              <p className="text-slate-400 text-xs">Independent Quality Control testing for raw materials & finished products.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <Building2 className="w-6 h-6 text-purple-400" />
              <h3 className="font-bold text-white">High Speed Packaging</h3>
              <p className="text-slate-400 text-xs">Automated Alu-Alu and tropical blister lines ensuring shelf-life integrity.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
              <h3 className="font-bold text-white">Pharmacovigilance</h3>
              <p className="text-slate-400 text-xs">Dedicated adverse event monitoring and medical safety reporting.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
