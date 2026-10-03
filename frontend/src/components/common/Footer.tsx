import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const Footer: React.FC = () => {
  const whatsappNumber = COMPANY_INFO.phone?.whatsapp?.replace(/[^0-9]/g, '') || '918102343062';

  return (
    <footer className="bg-[#040D1E] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info & Chat Button */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl border border-slate-200 shadow-md">
              <img 
                src="/logo.png" 
                alt="Torrance Life Science Pvt Ltd" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Advancing healthcare through quality pharmaceutical solutions. Trusted by hospitals, clinics, and distributors across India.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Torrance Life Science Team!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-sky-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              PRODUCTS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products?category=tablets-capsules" className="hover:text-sky-400 transition-colors">Tablets & Capsules</Link></li>
              <li><Link to="/products?category=injections" className="hover:text-sky-400 transition-colors">Injections</Link></li>
              <li><Link to="/products?category=syrups-suspensions" className="hover:text-sky-400 transition-colors">Syrups & Suspensions</Link></li>
              <li><Link to="/products?category=ointments-creams" className="hover:text-sky-400 transition-colors">Ointments & Creams</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email.enquiry}`} className="hover:text-sky-400 transition-colors truncate">
                  {COMPANY_INFO.email.enquiry}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.whatsapp}`} className="hover:text-sky-400 transition-colors">
                  {COMPANY_INFO.phone.whatsapp}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Torrance Life Science. All rights reserved.
          </div>
          <div className="font-semibold text-slate-400">
            Advancing Healthcare. Delivering Trust.
          </div>
        </div>

      </div>
    </footer>
  );
};
