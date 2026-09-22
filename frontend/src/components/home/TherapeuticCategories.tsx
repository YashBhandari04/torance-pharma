import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Activity, ShieldCheck, Brain, Bone, Sparkles, ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6 text-red-500" />,
  Activity: <Activity className="w-6 h-6 text-sky-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
  Brain: <Brain className="w-6 h-6 text-purple-500" />,
  Bone: <Bone className="w-6 h-6 text-amber-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-indigo-500" />,
};

export const TherapeuticCategories: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-sky-600 font-semibold text-xs tracking-widest uppercase mb-1">
              Therapeutic Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Medical Divisions
            </h2>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group"
          >
            <span>View All Therapeutic Categories</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat._id}
              to={`/products?category=${cat.slug}`}
              className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[cat.icon] || <Activity className="w-6 h-6 text-sky-500" />}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                    {cat.productCount || 20}+ Formulations
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>

              {/* Decorative hover gradient border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
