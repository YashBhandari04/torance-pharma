import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Activity, ShieldCheck, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import { DIVISIONS } from '../data/mockData';

export const Divisions: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            Specialized Business Units
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Therapeutic Divisions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Torance Life Science operates specialized division SBUs dedicated to focused medical specialties, ensuring targeted promotion and tailored formulation science.
          </p>
        </div>

        {/* Divisions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200">
                    {div.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                    T
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">{div.name}</h2>
                <p className="text-sky-600 text-xs font-semibold uppercase tracking-wider">{div.tagline}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{div.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Dedicated Field Force & KOL Coverage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Specialty Promotional & Visual Aid Support</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to={`/contact?division=${encodeURIComponent(div.name)}`}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors"
                >
                  <span>Apply for {div.badge} Franchise</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
