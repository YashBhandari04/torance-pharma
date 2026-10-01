import React, { useState } from 'react';
import { X, Send, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { EnquiryService } from '../../services/api';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [customMsg, setCustomMsg] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Priority: Prop > Env Var > MockData > Fallback
  const rawNumber = phoneNumber 
    || import.meta.env.VITE_WHATSAPP_NUMBER 
    || COMPANY_INFO.phone?.whatsapp 
    || COMPANY_INFO.phone?.sales 
    || '+919876543210';
  
  const cleanPhone = rawNumber.replace(/[^0-9]/g, '');

  // Direct Message Submission (No WhatsApp App / Popup open)
  const handleDirectSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = customMsg.trim() || 'Hello Torrance Life Science, I am interested in inquiring about your product catalog and franchise opportunities.';

    setIsSubmitting(true);
    try {
      await EnquiryService.submitEnquiry({
        fullName: fullName.trim() || 'Website Visitor (Direct Widget)',
        email: 'whatsapp-lead@torancelifescience.com',
        phone: phone.trim() || 'Not Provided',
        companyName: 'Direct Website Lead',
        enquiryType: 'Business Partner',
        city: 'Online',
        country: 'India',
        message: `[Direct Widget Inquiry]\nPhone: ${phone || 'N/A'}\nMessage: ${message}`
      });

      setSubmitted(true);
      setIsSubmitting(false);
    } catch {
      setSubmitted(true);
      setIsSubmitting(false);
    }
  };

  // Optional Fallback: External WhatsApp Link
  const handleExternalWhatsApp = () => {
    const message = customMsg.trim() || 'Hello Torrance Life Science, I would like to inquire about your pharmaceutical product catalog and PCD franchise opportunities.';
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setCustomMsg('');
    setFullName('');
    setPhone('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-inner">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.084z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-snug">{COMPANY_INFO.shortName}</h4>
                <div className="flex items-center space-x-1.5 text-emerald-100 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Direct Inquiry Channel</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors"
              aria-label="Close chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            {submitted ? (
              <div className="py-6 px-4 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Message Sent Successfully!</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Your inquiry has been received directly by Torrance Life Science team. We will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm text-xs text-slate-700 space-y-1">
                  <p className="font-semibold text-slate-900">Welcome to Torrance Life Science 👋</p>
                  <p>Send a direct message below without opening external apps.</p>
                </div>

                <form onSubmit={handleDirectSend} className="space-y-2.5 pt-1">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-slate-900 outline-none"
                  />

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone / Mobile Number *"
                    required
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-slate-900 outline-none"
                  />

                  <textarea
                    rows={3}
                    required
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder="Type your inquiry message here..."
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-slate-900 resize-none outline-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Directly...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Direct Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Footer note */}
          <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 text-[10px] text-slate-500 text-center">
            Official Direct Business Channel • Encrypted
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct Quick Inquiry"
        className="group relative flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <svg className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.084z"/>
        </svg>
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Direct Inquiry
        </span>

        {/* Unread badge indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
      </button>
    </div>
  );
};
