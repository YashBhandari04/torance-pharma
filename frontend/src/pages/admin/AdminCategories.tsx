import React, { useState, useEffect } from 'react';
import { Layers, Plus, X, Activity, CheckCircle2 } from 'lucide-react';
import { CategoryService, api } from '../../services/api';
import { Category } from '../../types';

export const AdminCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('Activity');
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    const cats = await CategoryService.getCategories();
    setCategories(cats);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage(null);

    try {
      await api.post('/categories', { name, description, icon });
      setStatusMessage('Category created successfully.');
      await fetchCategories();
      setTimeout(() => {
        setModalOpen(false);
        setName('');
        setDescription('');
        setStatusMessage(null);
      }, 1000);
    } catch (err: any) {
      setStatusMessage('Error creating category: ' + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs text-sky-400 font-bold uppercase tracking-widest">Medical Divisions</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Therapeutic Categories</h1>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-3 py-12 text-center text-slate-400 text-xs">
            Loading categories...
          </div>
        ) : categories.map((cat) => (
          <div key={cat._id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-lg">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-bold">
                {cat.productCount || 0} Formulations
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{cat.description}</p>
            </div>

            <div className="pt-2 text-[10px] text-sky-400 font-mono">
              Slug: /{cat.slug}
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
            <div className="p-6 bg-slate-950 text-white flex justify-between items-center border-b border-slate-800">
              <h3 className="text-lg font-bold">Add Therapeutic Category</h3>
              <button onClick={() => setModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {statusMessage && (
              <div className="p-3 bg-sky-950 border-b border-sky-800 text-sky-300 text-xs font-semibold text-center">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleCreateCategory} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dermatology & Skincare"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Category Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Brief therapeutic focus and usage overview..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-2 flex space-x-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400 shadow-md"
                >
                  {saving ? 'Creating...' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
