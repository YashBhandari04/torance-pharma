import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';

export const FeaturedProductsSection: React.FC = () => {
  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-100">
            <Pill className="w-3.5 h-3.5 text-sky-500" />
            <span>Ethical Formulations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Medicines & Prescription Brands
          </h2>
          <p className="text-slate-600 text-base">
            Engineered in WHO-GMP certified facilities with verified drug compositions and therapeutic safety profiles.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => {
            const catName = typeof product.category === 'object' ? product.category.name : product.category;
            return (
              <div 
                key={product._id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-4/3 bg-slate-50 overflow-hidden border-b border-slate-100">
                    <img 
                      src={product.imageUrl} 
                      alt={product.brandName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                        {product.dosageForm}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="text-xs text-sky-600 font-semibold uppercase tracking-wider">
                      {catName}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {product.brandName}
                    </h3>

                    <p className="text-xs font-medium text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-900">Generic:</span> {product.genericName}
                    </p>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.composition}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <div className="text-[11px] text-slate-500 pb-3 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="font-medium text-slate-700">Pack: {product.packaging}</span>
                    <span className="flex items-center text-emerald-600 font-medium">
                      <Shield className="w-3 h-3 mr-1" /> IP Standard
                    </span>
                  </div>

                  <Link
                    to={`/products/${product._id}`}
                    className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-slate-100 hover:bg-sky-600 text-slate-800 hover:text-white font-semibold text-xs transition-colors duration-200"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-all duration-200"
          >
            <span>Explore Full 150+ Product Directory</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};
