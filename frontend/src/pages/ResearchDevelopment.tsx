import React from 'react';
import { FlaskConical, Microscope, ShieldCheck, Cpu, TestTube, Layers, Sparkles } from 'lucide-react';

export const ResearchDevelopment: React.FC = () => {
  const rdPillars = [
    {
      title: 'Formulation Optimization',
      icon: <FlaskConical className="w-6 h-6 text-sky-500" />,
      desc: 'Developing robust solid oral and liquid formulations with enhanced bio-availability and minimal side effect profiles.'
    },
    {
      title: 'Novel Drug Delivery (NDDS)',
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      desc: 'Specialized expertise in Sustained-Release (SR) pellets, Matrix Tablets, and Enteric-Coated Multiparticulate systems.'
    },
    {
      title: 'Analytical Method Validation',
      icon: <Microscope className="w-6 h-6 text-emerald-500" />,
      desc: 'Assay method development using HPLC and Gas Chromatography in compliance with ICH Q2(R1) regulatory guidelines.'
    },
    {
      title: 'Stability Testing Chambers',
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      desc: 'Accelerated and real-time ICH stability studies (Zone IVB climate conditions) for long shelf-life assurance.'
    }
  ];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30 inline-block">
              Scientific Innovation Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Research & Development
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              At Torrance Life Science, our dedicated R&D scientists bridge modern pharmaceutical chemistry with therapeutic precision, ensuring highest bioavailability and patient compliance.
            </p>
          </div>
        </div>

        {/* Core R&D Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rdPillars.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Laboratory Capabilities */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">State-of-the-Art Labs</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Analytical & Formulation Infrastructure</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our central R&D center houses modern instrumentation including Waters HPLC systems, Agilent UV-Vis Spectrophotometers, Brookfield Viscometers, and automated Dissolution Testing Apparatus (USP Type I & II).
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>GLP Compliant Testing</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero Contamination Cleanrooms</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg aspect-4/3">
            <img 
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800" 
              alt="Torrance Analytical R&D Laboratory" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
