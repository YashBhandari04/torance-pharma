import React, { useState, useEffect } from 'react';
import { MessageSquareText, Search, Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { api } from '../../services/api';
import { Enquiry, EnquiryStatus, EnquiryType } from '../../types';

export const AdminEnquiries: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await api.get('/enquiries');
      setEnquiries(res.data.data);
    } catch {
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: EnquiryStatus) => {
    setUpdatingId(id);
    try {
      await api.patch(`/enquiries/${id}/status`, { status: newStatus });
      await fetchEnquiries();
    } catch (err: any) {
      alert('Failed to update enquiry status: ' + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesType = selectedType === 'all' || e.enquiryType === selectedType;
    const matchesStatus = selectedStatus === 'all' || e.status === selectedStatus;
    return matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs text-sky-400 font-bold uppercase tracking-widest">Trade Desk</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Business & PCD Enquiries</h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="all">All Inquiry Types</option>
            <option value="Distributor">PCD Distributor Inquiry</option>
            <option value="Hospital">Hospital Supply Inquiry</option>
            <option value="Business Partner">Contract Manufacturing Partnership</option>
            <option value="General">General Inquiry</option>
          </select>
        </div>

        <div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="NEW">New (Unreviewed)</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="CONTACTED">Contacted</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
      </div>

      {/* Enquiries Directory */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            Fetching trade inquiries...
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-xs">
            No business enquiries found matching filters.
          </div>
        ) : (
          <div className="divide-y divide-slate-800">
            {filteredEnquiries.map((enq) => (
              <div key={enq._id} className="p-6 hover:bg-slate-800/30 transition-colors space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 rounded bg-sky-950 text-sky-300 border border-sky-800/50 text-[10px] font-bold">
                      {enq.enquiryType}
                    </span>
                    <h3 className="text-base font-bold text-white">{enq.fullName}</h3>
                    {enq.companyName && (
                      <span className="text-xs text-slate-400 font-normal">• {enq.companyName}</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] text-slate-400">
                      {new Date(enq.createdAt).toLocaleString()}
                    </span>
                    <select
                      value={enq.status}
                      disabled={updatingId === enq._id}
                      onChange={(e) => handleStatusChange(enq._id, e.target.value as EnquiryStatus)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold border cursor-pointer ${
                        enq.status === 'NEW' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                        enq.status === 'IN_PROGRESS' ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' :
                        enq.status === 'CONTACTED' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                        'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      <option value="NEW">NEW</option>
                      <option value="IN_PROGRESS">IN_PROGRESS</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                  <div className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <a href={`mailto:${enq.email}`} className="hover:text-white">{enq.email}</a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <a href={`tel:${enq.phone}`} className="hover:text-white">{enq.phone}</a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{enq.city}, {enq.state || ''} {enq.country}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed font-mono">
                  {enq.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
