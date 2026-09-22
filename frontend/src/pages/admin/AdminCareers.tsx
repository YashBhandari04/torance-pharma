import React, { useState, useEffect } from 'react';
import { Briefcase, Plus, X, MapPin, CheckCircle2 } from 'lucide-react';
import { CareerService, api } from '../../services/api';
import { Career } from '../../types';

export const AdminCareers: React.FC = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Form Fields
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('Sales & Marketing');
  const [location, setLocation] = useState('Ahmedabad, Gujarat');
  const [type, setType] = useState<'Full-Time' | 'Part-Time' | 'Contract'>('Full-Time');
  const [description, setDescription] = useState('');
  const [requirementsStr, setRequirementsStr] = useState('');
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fetchCareers = async () => {
    setLoading(true);
    const data = await CareerService.getCareers();
    setCareers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleCreateCareer = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage(null);

    const payload = {
      title,
      department,
      location,
      type,
      description,
      requirements: requirementsStr.split(',').map(s => s.trim()).filter(Boolean),
    };

    try {
      await api.post('/careers', payload);
      setStatusMessage('Job opening posted successfully.');
      await fetchCareers();
      setTimeout(() => {
        setModalOpen(false);
        setTitle('');
        setDescription('');
        setRequirementsStr('');
        setStatusMessage(null);
      }, 1000);
    } catch (err: any) {
      setStatusMessage('Error posting job: ' + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await api.patch(`/careers/${id}/toggle`);
      await fetchCareers();
    } catch (err: any) {
      alert('Failed to toggle career status: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs text-sky-400 font-bold uppercase tracking-widest">HR & Talent Acquisition</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Career Openings</h1>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Job Opening</span>
        </button>
      </div>

      {/* Careers List */}
      <div className="space-y-4">
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            Loading job postings...
          </div>
        ) : careers.map((job) => (
          <div key={job._id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-lg">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-bold border border-sky-800/40">
                  {job.department}
                </span>
                <span className="text-xs text-slate-400">{job.type}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{job.title}</h3>
              <div className="flex items-center space-x-1 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{job.location}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">{job.description}</p>
            </div>

            <button
              onClick={() => handleToggleStatus(job._id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                job.isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              {job.isActive ? 'Active (Click to Close)' : 'Inactive (Click to Activate)'}
            </button>
          </div>
        ))}
      </div>

      {/* Add Job Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
            <div className="p-6 bg-slate-950 text-white flex justify-between items-center border-b border-slate-800">
              <h3 className="text-lg font-bold">Post New Job Opening</h3>
              <button onClick={() => setModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {statusMessage && (
              <div className="p-3 bg-sky-950 border-b border-sky-800 text-sky-300 text-xs font-semibold text-center">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleCreateCareer} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Regional Sales Manager (Cardio)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Department *</label>
                  <input
                    type="text"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Requirements (comma separated)</label>
                <input
                  type="text"
                  placeholder="B.Pharm degree, 3+ years experience in Sales"
                  value={requirementsStr}
                  onChange={(e) => setRequirementsStr(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Job Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Key responsibilities and qualifications required..."
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
                  {saving ? 'Posting...' : 'Post Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
