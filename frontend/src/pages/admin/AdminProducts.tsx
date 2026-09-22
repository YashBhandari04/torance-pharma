import React, { useState, useEffect } from 'react';
import { 
  Pill, Plus, Search, Edit2, Trash2, X, CheckCircle2, 
  Shield, Image as ImageIcon, Eye, Star, Upload
} from 'lucide-react';
import { ProductService, CategoryService, api } from '../../services/api';
import { Product, Category, DosageForm } from '../../types';

export const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form Fields State
  const [brandName, setBrandName] = useState('');
  const [genericName, setGenericName] = useState('');
  const [composition, setComposition] = useState('');
  const [strength, setStrength] = useState('');
  const [dosageForm, setDosageForm] = useState<DosageForm>('Tablet');
  const [categoryId, setCategoryId] = useState('');
  const [packaging, setPackaging] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [indicationsStr, setIndicationsStr] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const dosageOptions: DosageForm[] = [
    'Tablet', 'Capsule', 'Injectable', 'Syrup', 'Suspension', 'Ointment', 'Nutraceutical'
  ];

  const fetchProductsData = async () => {
    setLoading(true);
    const [prods, cats] = await Promise.all([
      ProductService.getAllProducts({ includeArchived: 'true' } as any),
      CategoryService.getCategories(),
    ]);
    setProducts(prods);
    setCategories(cats);
    if (cats.length > 0 && !categoryId) setCategoryId(cats[0]._id);
    setLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const openCreateModal = () => {
    setEditingProduct(null);
    setBrandName('');
    setGenericName('');
    setComposition('');
    setStrength('');
    setDosageForm('Tablet');
    if (categories.length > 0) setCategoryId(categories[0]._id);
    setPackaging('10 x 10 Blister');
    setImageUrl('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800');
    setDescription('');
    setIndicationsStr('');
    setIsFeatured(false);
    setModalOpen(true);
  };

  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setBrandName(p.brandName);
    setGenericName(p.genericName);
    setComposition(p.composition);
    setStrength(p.strength);
    setDosageForm(p.dosageForm);
    const catId = typeof p.category === 'object' ? p.category._id : p.category;
    setCategoryId(catId);
    setPackaging(p.packaging);
    setImageUrl(p.imageUrl);
    setDescription(p.description);
    setIndicationsStr(p.indications ? p.indications.join(', ') : '');
    setIsFeatured(p.isFeatured);
    setModalOpen(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      try {
        const res = await api.post('/products/upload-image', {
          imageBase64: base64,
          filename: file.name,
        });
        setImageUrl(res.data.imageUrl);
        setStatusMessage('Packaging image attached successfully.');
      } catch (err: any) {
        setStatusMessage('Image upload error: ' + (err.response?.data?.message || err.message));
      } finally {
        setUploadingImage(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage(null);

    const payload = {
      brandName,
      genericName,
      composition,
      strength,
      dosageForm,
      category: categoryId,
      packaging,
      imageUrl,
      description,
      indications: indicationsStr.split(',').map(s => s.trim()).filter(Boolean),
      isFeatured,
    };

    try {
      if (editingProduct) {
        await ProductService.updateProduct(editingProduct._id, payload);
        setStatusMessage('Medicine formulation updated successfully.');
      } else {
        await ProductService.createProduct(payload);
        setStatusMessage('New medicine formulation created successfully.');
      }

      await fetchProductsData();
      setTimeout(() => {
        setModalOpen(false);
        setStatusMessage(null);
      }, 1200);
    } catch (err: any) {
      setStatusMessage('Error saving product: ' + (err.message || 'Validation failed.'));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to remove "${name}" from database?`)) return;
    try {
      await ProductService.deleteProduct(id);
      await fetchProductsData();
    } catch (err: any) {
      alert('Failed to delete product: ' + err.message);
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = 
      p.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.genericName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const catSlug = typeof p.category === 'object' ? p.category.slug : p.category;
    const matchesCategory = selectedCategory === 'all' || catSlug === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs text-sky-400 font-bold uppercase tracking-widest">Catalog Administration</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Medicine Formulations</h1>
        </div>

        <button
          onClick={openCreateModal}
          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search brand name or generic composition..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        <div className="md:col-span-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="all">All Therapeutic Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            Loading medicine directory...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-xs">
            No medicine formulations found matching criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-4">Brand Name</th>
                  <th className="py-3.5 px-4">Generic Formulation</th>
                  <th className="py-3.5 px-4">Dosage / Strength</th>
                  <th className="py-3.5 px-4">Packaging</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 font-medium">
                {filteredProducts.map((prod) => {
                  const catName = typeof prod.category === 'object' ? prod.category.name : 'Category';
                  return (
                    <tr key={prod._id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <div>
                          <span>{prod.brandName}</span>
                          <span className="block text-[10px] text-sky-400 font-normal">{catName}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        {prod.genericName}
                        <span className="block text-[10px] text-slate-400 truncate max-w-xs">{prod.composition}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 text-[10px] font-bold">
                          {prod.dosageForm} ({prod.strength})
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 text-[11px]">{prod.packaging}</td>
                      <td className="py-3.5 px-4">
                        {prod.isFeatured ? (
                          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold border border-sky-500/30 flex items-center w-fit">
                            <Star className="w-3 h-3 mr-1 text-sky-400" /> Featured
                          </span>
                        ) : (
                          <span className="text-slate-500 text-[10px]">Standard</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => openEditModal(prod)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                            title="Edit Formulation"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(prod._id, prod.brandName)}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add / Edit Product Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-fadeIn my-8">
            
            <div className="p-6 bg-slate-950 text-white flex justify-between items-center border-b border-slate-800">
              <h3 className="text-lg font-bold">
                {editingProduct ? `Edit Medicine: ${editingProduct.brandName}` : 'Add New Medicine Formulation'}
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {statusMessage && (
              <div className="p-3 bg-sky-950 border-b border-sky-800 text-sky-300 text-xs font-semibold text-center">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Brand Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TOR-TELMI 40"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Generic Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Telmisartan Tablets IP"
                    value={genericName}
                    onChange={(e) => setGenericName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Composition *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Each uncoated tablet contains: Telmisartan IP 40mg"
                  value={composition}
                  onChange={(e) => setComposition(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Strength *</label>
                  <input
                    type="text"
                    required
                    placeholder="40mg"
                    value={strength}
                    onChange={(e) => setStrength(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Dosage Form *</label>
                  <select
                    value={dosageForm}
                    onChange={(e) => setDosageForm(e.target.value as DosageForm)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    {dosageOptions.map(form => (
                      <option key={form} value={form}>{form}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Therapeutic Category *</label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    {categories.map(cat => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Packaging Info *</label>
                  <input
                    type="text"
                    required
                    placeholder="10 x 14 Tablets Blister"
                    value={packaging}
                    onChange={(e) => setPackaging(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product Packaging Image *</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      required
                      placeholder="Image URL or upload file..."
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                    />
                    <label className="p-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0 flex items-center space-x-1">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{uploadingImage ? '...' : 'Upload'}</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Indications (comma separated)</label>
                <input
                  type="text"
                  placeholder="Essential Hypertension, Cardiovascular Risk Reduction"
                  value={indicationsStr}
                  onChange={(e) => setIndicationsStr(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Approved Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Clinical usage and prescribing notes..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-sky-500 accent-sky-500"
                />
                <label htmlFor="featuredCheck" className="text-xs text-slate-300 font-medium">
                  Feature this medicine on Homepage carousel
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 flex space-x-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || uploadingImage}
                  className="flex-1 py-3 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400 shadow-md"
                >
                  {saving ? 'Saving...' : editingProduct ? 'Update Product' : 'Create Product'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
