import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, Filter, Pill, ShieldCheck, ChevronRight, X, SlidersHorizontal, ArrowRight
} from 'lucide-react';
import { ProductService, CategoryService } from '../services/api';
import { Product, Category, DosageForm } from '../types';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDosage, setSelectedDosage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const dosageOptions: DosageForm[] = [
    'Tablet', 'Capsule', 'Injectable', 'Syrup', 'Suspension', 'Ointment', 'Nutraceutical'
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [cats, prods] = await Promise.all([
        CategoryService.getCategories(),
        ProductService.getAllProducts({
          category: selectedCategory,
          dosageForm: selectedDosage,
          search: searchQuery,
        })
      ]);
      setCategories(cats);
      setProducts(prods);
      setLoading(false);
    };

    fetchData();
  }, [selectedCategory, selectedDosage, searchQuery]);

  // Sync URL search params
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') newParams.delete('category');
    else newParams.set('category', slug);
    setSearchParams(newParams);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (!query) newParams.delete('search');
    else newParams.set('search', query);
    setSearchParams(newParams);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedDosage('all');
    setSearchQuery('');
    setSearchParams({});
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-500/30 inline-block">
              WHO-GMP Verified Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Pharmaceutical Product Directory
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our range of ethical prescription medicines, generic formulations, and specialized therapeutic brands.
            </p>
          </div>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Realtime Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by brand (e.g. TOR-TELMI), generic formulation, or composition..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dosage Form Select Filter */}
            <div className="md:col-span-4 relative">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={selectedDosage}
                onChange={(e) => {
                  setSelectedDosage(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-sky-500 appearance-none text-slate-700 font-medium cursor-pointer"
              >
                <option value="all">All Dosage Forms</option>
                {dosageOptions.map((form) => (
                  <option key={form} value={form}>{form}s</option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-2">
              <button
                onClick={resetFilters}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-xs transition-colors flex items-center justify-center space-x-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>

          </div>

          {/* Therapeutic Category Pills */}
          <div className="pt-2 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories ({products.length})
            </button>

            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid & Active Results Header */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm font-semibold text-slate-600">
              Showing <span className="text-slate-900 font-bold">{displayedProducts.length}</span> of {products.length} verified products
            </p>

            {(selectedCategory !== 'all' || selectedDosage !== 'all' || searchQuery) && (
              <span className="text-xs text-sky-600 font-medium">
                Filtered view active
              </span>
            )}
          </div>

          {loading ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-10 h-10 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-slate-500 text-sm font-medium">Loading pharmaceutical catalog...</p>
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Pill className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">No matching medicines found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Try adjusting your search criteria or clearing selected category and dosage filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-xs hover:bg-sky-700 transition-colors"
              >
                View Full Product Catalog
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => {
                const catName = typeof product.category === 'object' ? product.category.name : product.category;
                return (
                  <div
                    key={product._id}
                    className="group bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative aspect-16/10 bg-slate-50 border-b border-slate-100 overflow-hidden">
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
                          <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 border border-sky-200 text-[10px] font-bold">
                            {product.strength}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                          {catName}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                          {product.brandName}
                        </h3>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                          <p className="font-semibold text-slate-800">{product.genericName}</p>
                          <p className="text-slate-500 text-[11px] mt-0.5 line-clamp-2">{product.composition}</p>
                        </div>

                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                        <span>Pack: <strong className="text-slate-700">{product.packaging}</strong></span>
                        <span className="flex items-center text-emerald-600 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verified Batch
                        </span>
                      </div>

                      <Link
                        to={`/products/${product._id}`}
                        className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors duration-200"
                      >
                        <span>View Specifications & Sample</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 pt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-xl text-xs font-semibold transition-colors ${
                  currentPage === page
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
