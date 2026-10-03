import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Search, Menu, X, Shield, 
  Building2, Pill, MessageSquareText, Lock, MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const whatsappNumber = COMPANY_INFO.phone?.whatsapp?.replace(/[^0-9]/g, '') || '918102343062';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="relative z-50 shadow-md transition-all duration-300">
      {/* Top Corporate Info Bar */}
      <div className="bg-[#040D1E] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.phone.board}`} className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.phone.board}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email.enquiry}`} className="hidden sm:flex items-center space-x-1.5 hover:text-sky-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.email.enquiry}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 text-[11px] font-medium border border-sky-800/50">
              <Shield className="w-3 h-3 mr-1 text-sky-400" />
              WHO-GMP & ISO 9001:2015 Certified
            </span>
            <Link to="/admin/login" className="flex items-center space-x-1 hover:text-white transition-colors text-[11px] font-medium text-slate-400">
              <Lock className="w-3 h-3 text-slate-400" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* GoDaddy Style Dark Navy Main Navigation */}
      <nav className="bg-[#06142E] text-white px-4 py-3.5 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo Box */}
          <Link to="/" className="flex items-center py-1">
            <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200">
              <img 
                src="/logo.png" 
                alt="Torrance Life Science Pvt Ltd" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-white border-b-2 border-sky-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* GoDaddy Style WhatsApp CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Search catalog"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Torrance Life Science Team! I want to inquire about products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4.5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200 gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-300 hover:bg-slate-800 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800 animate-fadeIn">
            <div className="flex flex-col space-y-2 pb-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'bg-sky-500/20 text-sky-400'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 px-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Torrance Life Science Team! I want to inquire about products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Global Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-fadeIn">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="w-5 h-5 text-sky-500" />
                <input
                  type="text"
                  placeholder="Search brand name, generic formulation (e.g. Telmisartan)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-slate-800 focus:outline-none text-base"
                  autoFocus
                />
              </div>
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-slate-50 text-xs text-slate-500 flex justify-between items-center">
              <span>Press enter to view full dynamic catalog</span>
              <Link 
                to={`/products?search=${encodeURIComponent(searchQuery)}`} 
                onClick={() => setSearchOpen(false)}
                className="text-sky-600 font-semibold hover:underline"
              >
                Go to Catalog &rrarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
