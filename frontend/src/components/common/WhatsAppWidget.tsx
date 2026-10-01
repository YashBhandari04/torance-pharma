import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customMsg, setCustomMsg] = useState<string>('');

  // Priority: Prop > Env Var > MockData > Fallback
  const rawNumber = phoneNumber 
    || import.meta.env.VITE_WHATSAPP_NUMBER 
    || COMPANY_INFO.phone?.whatsapp 
    || COMPANY_INFO.phone?.sales 
    || '+919876543210';
  
  // Clean phone number format
  const cleanPhone = rawNumber.replace(/[^0-9]/g, '');

  const quickTopics = [
    { label: '💊 PCD Franchise Inquiry', text: 'Hello Torrance Life Science, I am interested in PCD Pharma Franchise opportunities for my district. Please share available divisions and terms.' },
    { label: '📦 Bulk Product Portfolio', text: 'Hello Torrance Life Science, please share your complete product catalog and pricing for commercial bulk procurement.' },
    { label: '🏥 Hospital / Institutional Supply', text: 'Hello, I want to inquire about hospital supply rates for your WHO-GMP certified critical care & antibiotic range.' }
  ];

  const handleLaunchWhatsApp = (messageText: string) => {
    const text = encodeURIComponent(messageText.trim());
    // Direct WhatsApp API URL (Works seamlessly on both mobile app and desktop web)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultMsg = 'Hello Torrance Life Science team, I would like to inquire about your pharmaceutical products and commercial services.';
    handleLaunchWhatsApp(customMsg || defaultMsg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Interactive WhatsApp Chat Box Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white shadow-inner">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.084z"/>
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
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

          {/* Chat Bubble & Quick Suggestions */}
          <div className="p-4 bg-slate-50 space-y-3">
            
            {/* Greeting Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200/90 shadow-sm text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-900">Welcome to Torrance Life Science 👋</p>
              <p className="leading-relaxed text-slate-600">
                How can our trade desk support your pharmaceutical requirements today? Select a quick topic or type your message below:
              </p>
            </div>

            {/* Quick Topic Buttons */}
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

            {/* Custom Message Box */}
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
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all duration-200"
              >
                <span>Start WhatsApp Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 text-[10px] text-slate-500 text-center font-medium">
            WHO-GMP Certified Pharmaceutical Direct Channel
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <svg className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.084z"/>
        </svg>
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp Chat
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
