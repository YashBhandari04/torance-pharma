import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, Layers, MessageSquareText, Briefcase, 
  TrendingUp, Plus, ArrowRight, Clock, CheckCircle2, AlertCircle
} from 'lucide-react';
import { ProductService, CategoryService, CareerService, api } from '../../services/api';
import { Product, Category, Career, Enquiry } from '../../types';

export const AdminDashboard: React.FC = () => {
  const [productsCount, setProductsCount] = useState<number>(0);
  const [categoriesCount, setCategoriesCount] = useState<number>(0);
  const [careersCount, setCareersCount] = useState<number>(0);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDashboardMetrics = async () => {
      setLoading(true);
      try {
        const [prods, cats, jobs] = await Promise.all([
          ProductService.getAllProducts({ includeArchived: 'true' } as any),
          CategoryService.getCategories(),
          CareerService.getCareers(),
        ]);

        setProductsCount(prods.length);
        setCategoriesCount(cats.length);
        setCareersCount(jobs.length);

        // Fetch enquiries from backend
        try {
          const res = await api.get('/enquiries');
          setEnquiries(res.data.data);
        } catch {
          // Local fallback
          setEnquiries([]);
        }
      } catch (err) {
        console.error('Error loading dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardMetrics();
  }, []);

  const pendingEnquiriesCount = enquiries.filter(e => e.status === 'NEW').length;

  return (
    <div className="space-y-8">
      
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs text-sky-400 font-bold uppercase tracking-widest">Control Center</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Dashboard Overview</h1>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/admin/products?action=new"
            className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </Link>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Products */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Formulations</span>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Pill className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">{loading ? '...' : productsCount}</div>
          <div className="text-[11px] text-slate-400 flex items-center space-x-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active in dynamic catalog</span>
          </div>
        </div>

        {/* Categories */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Therapeutic Divisions</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">{loading ? '...' : categoriesCount}</div>
          <div className="text-[11px] text-slate-400">Cardio, Gastro, Antibiotics & more</div>
        </div>

        {/* Pending Enquiries */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Pending Enquiries</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <MessageSquareText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-amber-400">{loading ? '...' : pendingEnquiriesCount}</div>
          <div className="text-[11px] text-slate-400">Awaiting commercial follow-up</div>
        </div>

        {/* Active Job Openings */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Open Positions</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">{loading ? '...' : careersCount}</div>
          <div className="text-[11px] text-slate-400">Sales, QA & R&D listings</div>
        </div>

      </div>

      {/* Recent Enquiries Preview Section */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">Recent Trade & Business Enquiries</h2>
            <p className="text-xs text-slate-400">Real-time incoming requests from distributors and hospitals.</p>
          </div>
          <Link
            to="/admin/enquiries"
            className="text-xs font-semibold text-sky-400 hover:underline flex items-center"
          >
            <span>View All Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        {enquiries.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs border border-dashed border-slate-800 rounded-2xl">
            No business enquiries received yet. Form submissions on the Contact page will appear here instantly.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Inquirer Name</th>
                  <th className="py-3 px-4">Company / Location</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 font-medium">
                {enquiries.slice(0, 5).map((enq) => (
                  <tr key={enq._id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      {enq.fullName}
                      <span className="block text-[10px] text-slate-400 font-normal">{enq.email}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      {enq.companyName || 'Individual'}
                      <span className="block text-[10px] text-slate-400">{enq.city}, {enq.country}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-300 text-[10px] font-bold">
                        {enq.enquiryType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        enq.status === 'NEW' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        enq.status === 'CONTACTED' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                        'bg-slate-800 text-slate-300'
                      }`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
