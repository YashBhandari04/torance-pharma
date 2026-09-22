import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Pill, ShieldCheck, ArrowLeft, Building2, 
  CheckCircle2, AlertCircle, FileText, Share2, Mail, Clock
} from 'lucide-react';
import { ProductService } from '../services/api';
import { Product } from '../types';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setLoading(true);
      const data = await ProductService.getProductById(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 py-20">
        <div className="w-12 h-12 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-600 font-medium text-sm">Loading product specification...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 py-20 px-4 text-center">
        <div className="p-4 rounded-full bg-red-50 text-red-500 mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Product Specification Not Found</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md">
          The requested product ID could not be retrieved from the catalog directory.
        </p>
        <Link
          to="/products"
          className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-sky-600 transition-colors"
        >
          Return to Product Directory
        </Link>
      </div>
    );
  }

  const categoryName = typeof product.category === 'object' ? product.category.name : product.category;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Back Link Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to Products</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
            <span>{copied ? 'Link Copied!' : 'Share Specs'}</span>
          </button>
        </div>

        {/* Specification Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left: Product Image Box */}
          <div className="lg:col-span-5 bg-slate-100 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200 aspect-square">
              <img
                src={product.imageUrl}
                alt={product.brandName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-bold">
                  {product.dosageForm}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-md bg-sky-500 text-white text-xs font-bold">
                  {product.strength}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-500">
                <span>Standard Regulatory Code:</span>
                <span className="font-mono text-slate-800 font-bold">IP Grade</span>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span>WHO-GMP Quality Assured:</span>
                <span className="text-emerald-600 font-bold flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verified
                </span>
              </div>
            </div>
          </div>

          {/* Right: Technical Specification Panel */}
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
            
            <div className="space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                {categoryName} Segment
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {product.brandName}
              </h1>
              <p className="text-base font-semibold text-slate-700">
                {product.genericName}
              </p>
            </div>

            {/* Active Composition Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center">
                <FileText className="w-3.5 h-3.5 mr-1 text-sky-600" />
                Active Formulation Composition
              </h3>
              <p className="text-sm font-medium text-slate-800 leading-relaxed font-mono">
                {product.composition}
              </p>
            </div>

            {/* Technical Parameters */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-medium">Packaging Unit</span>
                <p className="font-bold text-slate-900 text-sm">{product.packaging}</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-medium">Shelf Life Period</span>
                <p className="font-bold text-slate-900 text-sm">{product.shelfLife || '24 Months'}</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 space-y-1 col-span-2">
                <span className="text-slate-400 font-medium">Storage Instructions</span>
                <p className="font-bold text-slate-800">{product.storage || 'Store below 25°C in a dry place.'}</p>
              </div>
            </div>

            {/* Approved Indications */}
            {product.indications && product.indications.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Approved Therapeutic Indications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.indications.map((ind, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-medium border border-sky-200">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-sky-600" />
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Product Clinical Description */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Clinical Overview & Usage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Business Call to Action */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/contact?product=${encodeURIComponent(product.brandName)}`}
                className="flex-1 inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Request Commercial Sample / Quote</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
              >
                <Building2 className="w-4 h-4 mr-2 text-sky-400" />
                <span>PCD Franchise Inquiry</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
