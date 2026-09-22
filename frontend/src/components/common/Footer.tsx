import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, ShieldCheck, 
  ChevronRight, Award, Lock, ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Corporate Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                T
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">TORANCE</span>
                <span className="text-sky-400 font-semibold text-sm block -mt-1">LIFE SCIENCE PVT. LTD.</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              TORANCE LIFE SCIENCE is a premier WHO-GMP certified pharmaceutical manufacturing & marketing company committed to high-potency formulations across cardiovascular, gastroenterology, antibiotics, and neurosciences.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <span key={idx} className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">
                  <ShieldCheck className="w-3 h-3 mr-1 text-sky-400" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-sky-500 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> Product Portfolio
                </Link>
              </li>
              <li>
                <Link to="/divisions" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> Business Divisions
                </Link>
              </li>
              <li>
                <Link to="/research-development" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> R & D Capabilities
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> Careers & Culture
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> Business Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Therapeutic Segments */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-sky-500 pl-2">
              Therapeutics
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat._id}>
                  <Link to={`/products?category=${cat.slug}`} className="hover:text-sky-400 transition-colors flex items-center">
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-500" /> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Office & Contacts */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-l-2 border-sky-500 pl-2">
              Corporate Office
            </h4>
            <div className="text-sm space-y-3 text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.phone.board}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.email.enquiry}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pharmaceutical Industry Regulatory Disclaimer */}
        <div className="py-6 px-4 my-6 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-center space-x-2 text-sky-400 font-semibold mb-1">
            <Award className="w-4 h-4" />
            <span>Statutory Medical & Regulatory Notice</span>
          </div>
          The pharmaceutical product descriptions, generic formulations, and clinical indication details published on this corporate website are for informational purposes intended strictly for registered healthcare professionals, pharmaceutical distributors, hospital procurement boards, and commercial trade partners. No product is sold directly to retail consumers without valid medical prescriptions or outside drug licensing regulatory frameworks.
        </div>

        {/* Bottom Copyright & Admin Link */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-4 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link to="/admin/login" className="hover:text-slate-300 transition-colors flex items-center space-x-1">
              <Lock className="w-3 h-3 text-sky-400" />
              <span>Admin Portal Login</span>
            </Link>
            <span>•</span>
            <span className="text-slate-400">Designed for Global Healthcare Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
