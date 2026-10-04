import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, Mail, Phone, MapPin, Send, 
  CheckCircle2, AlertCircle, Clock, Loader2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { EnquiryType } from '../types';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';
  const prefilledDivision = searchParams.get('division') || '';

  const [enquiryType, setEnquiryType] = useState<EnquiryType>('PCD Franchise');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('India');
  const [message, setMessage] = useState(
    prefilledProduct 
      ? `Requesting commercial quotation & PCD franchise terms for medicine: ${prefilledProduct}.`
      : prefilledDivision
      ? `Interested in partnership for division: ${prefilledDivision}.`
      : ''
  );

  // Anti-spam Honeypot botcheck field
  const [botcheck, setBotcheck] = useState('');

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Validation
    const cleanName = fullName.trim();
    if (!cleanName || cleanName.length < 2) {
      setStatusMessage({ type: 'error', text: 'Please enter your full name (at least 2 characters).' });
      return;
    }

    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    const cleanMsg = message.trim();
    if (!cleanMsg || cleanMsg.length < 5) {
      setStatusMessage({ type: 'error', text: 'Please enter your inquiry message (at least 5 characters).' });
      return;
    }

    const cleanPhone = phone.trim();
    const cleanCity = city.trim();

    // Silently reject spam bots filling the honeypot
    if (botcheck) {
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    setLoading(true);

    try {
      // 2. Submit to Web3Forms API via POST as JSON
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey || '',
          subject: 'New Enquiry - Torrance Life Science Website',
          from_name: 'Torrance Website',
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          enquiryType: enquiryType,
          enquiry_type: enquiryType,
          company: companyName.trim(),
          city: cleanCity,
          state: state.trim(),
          country: country.trim() || 'India',
          message: cleanMsg,
          botcheck: botcheck
        })
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        // Clear success message and reset form fields
        setStatusMessage({ 
          type: 'success', 
          text: 'Thank you, we will contact you shortly.' 
        });

        setFullName('');
        setEmail('');
        setPhone('');
        setCompanyName('');
        setCity('');
        setState('');
        setMessage('');
        setBotcheck('');
      } else {
        setStatusMessage({ 
          type: 'error', 
          text: data.message || 'Something went wrong while sending your enquiry. Please try again.' 
        });
      }
    } catch {
      setLoading(false);
      setStatusMessage({ 
        type: 'error', 
        text: 'Something went wrong while sending your enquiry. Please check your connection and try again.' 
      });
    }
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            Corporate Trade Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Business Enquiries
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Submit your commercial inquiry below. Every submission is delivered directly to our team at {COMPANY_INFO.email.enquiry}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Corporate Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Key Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-lg text-slate-900 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
                  <span>Company Contact</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[10px] font-bold border border-sky-200 uppercase">
                  Management
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-28 h-32 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 shrink-0 bg-slate-100">
                  <img 
                    src={COMPANY_INFO.keyContact.image} 
                    alt={COMPANY_INFO.keyContact.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 flex-1 text-center sm:text-left">
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-900 leading-tight">{COMPANY_INFO.keyContact.name}</h4>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">{COMPANY_INFO.keyContact.designation}</p>
                    <p className="text-[11px] font-medium text-sky-600">{COMPANY_INFO.keyContact.segment}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Experience at Torrance</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.keyContact.experienceAtTorrance}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Overall Professional Experience</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.keyContact.overallExperience}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Education</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.keyContact.education}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.keyContact.location}</span>
                </div>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">Registered Address</h3>
                  <span className="text-xs text-sky-400 font-medium">Corporate Headquarters</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block">{COMPANY_INFO.name}</strong>
                    {COMPANY_INFO.address}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Board: {COMPANY_INFO.phone.board}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email.enquiry}`} className="hover:text-sky-400 transition-colors">
                    {COMPANY_INFO.email.enquiry}
                  </a>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 space-y-2">
              <div className="flex items-center space-x-2 font-bold">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Commercial Support Hours</span>
              </div>
              <p className="text-sky-800">
                Monday – Saturday: 9:00 AM – 6:30 PM (IST)<br />
                Direct Sales Desk: {COMPANY_INFO.phone.sales}
              </p>
            </div>

          </div>

          {/* Right Column: Business Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">Transmit Business Enquiry</h2>
              <p className="text-xs text-slate-500">
                Fill out the required information below. Submissions arrive directly in our inbox.
              </p>
            </div>

            {/* Status Alert Banner */}
            {statusMessage && (
              <div
                className={`p-4 rounded-xl text-xs font-semibold flex items-center space-x-3.5 transition-all ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                    : 'bg-red-50 text-red-900 border border-red-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Anti-spam Honeypot botcheck field */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                checked={!!botcheck}
                onChange={(e) => setBotcheck(e.target.checked ? 'true' : '')}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Enquiry Type Selector Options */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Enquiry Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['PCD Franchise', 'Hospital Supply', 'Product Enquiry', 'Other'] as EnquiryType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setEnquiryType(type);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                        enquiryType === type
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Apollo Pharma Distributors"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Ahmedabad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
                  <input
                    type="text"
                    placeholder="Gujarat"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide details regarding territory requirements, expected order volumes, or specific medicine formulations..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500 focus:bg-white text-slate-900 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-sky-600 disabled:opacity-50 text-white font-bold text-xs transition-colors duration-200 shadow-md flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-sky-400" />
                      <span>Transmit Official Business Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
