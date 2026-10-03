import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customMsg, setCustomMsg] = useState<string>('');

  const rawNumber = phoneNumber 
    || import.meta.env.VITE_WHATSAPP_NUMBER 
    || COMPANY_INFO.phone?.whatsapp 
    || COMPANY_INFO.phone?.sales 
    || '918102343062';
  
  const cleanPhone = rawNumber.replace(/[^0-9]/g, '');

  const quickTopics = [
    { label: '💊 PCD Franchise Inquiry', text: 'Hello Torrance Life Science, I am interested in PCD Pharma Franchise opportunities for my district.' },
    { label: '📦 Bulk Product Portfolio', text: 'Hello Torrance Life Science, please share your complete product catalog and pricing.' },
    { label: '🏥 Hospital Supply Rate', text: 'Hello, I want to inquire about hospital supply rates for your WHO-GMP certified range.' }
  ];

  const handleLaunchWhatsApp = (messageText: string) => {
    const text = encodeURIComponent(messageText.trim());
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultMsg = 'Hello Torrance Life Science team, I would like to inquire about your pharmaceutical products.';
    handleLaunchWhatsApp(customMsg || defaultMsg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      
      {/* 1. Floating Email Button (Matching Blue Circle in media_1791023552398.png) */}
      <Link
        to="/contact"
        aria-label="Send Email Inquiry"
        title="Send Email Inquiry"
        className="w-13 h-13 rounded-full bg-[#1D64EC] hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Mail className="w-6 h-6 stroke-[2.2]" />
      </Link>

      {/* 2. Interactive WhatsApp Chat Popup */}
      {isOpen && (
        <div className="mb-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-inner">
                  <WhatsAppIcon className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-[#25D366] rounded-full"></span>
              </div>

              <div>
                <h4 className="font-bold text-sm leading-snug">{COMPANY_INFO.name}</h4>
                <div className="flex items-center space-x-1 text-emerald-100 text-[11px]">
                  <span>Online • Official Business Chat</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
              aria-label="Close WhatsApp window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200/90 shadow-sm text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-900">Welcome to Torrance Life Science 👋</p>
              <p className="leading-relaxed text-slate-600">
                How can our trade desk support your pharmaceutical requirements today?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-emerald-600" />
                Quick Inquiry Topics:
              </span>
              {quickTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLaunchWhatsApp(topic.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs font-semibold text-slate-800 transition-all duration-150 flex items-center justify-between group shadow-2xs"
                >
                  <span>{topic.label}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-2 pt-2 border-t border-slate-200">
              <textarea
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Or type a custom inquiry message..."
                className="w-full p-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-slate-900 resize-none outline-none"
              />
              
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md transition-all duration-200"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      )}

      {/* 3. Main Floating WhatsApp Button (Matching Green Circle in media_1791023552398.png) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 relative"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
      </button>

    </div>
  );
};
