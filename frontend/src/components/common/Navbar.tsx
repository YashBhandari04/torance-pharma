import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Search, Menu, X, Shield, 
  ChevronRight, Building2, Pill, Users, FlaskConical, Briefcase, MessageSquareText, Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Building2 },
    { name: 'About Us', path: '/about', icon: Shield },
    { name: 'Products', path: '/products', icon: Pill },
    { name: 'Divisions', path: '/divisions', icon: Users },
    { name: 'R & D', path: '/research-development', icon: FlaskConical },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Contact Us', path: '/contact', icon: MessageSquareText },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm transition-all duration-300">
      {/* Top Corporate Information Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
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

      {/* Main Glassmorphic Navigation Bar */}
      <nav className="glass-card bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Corporate Brand Logo */}
          <Link to="/" className="flex items-center group py-1">
            <img 
              src="/logo.png" 
              alt="Torrance Life Science Pvt Ltd" 
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive(link.path)
                    ? 'text-sky-600 bg-sky-50 font-semibold shadow-xs'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions & Business CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Search medicines and products"
              aria-label="Search product catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Business Enquiry</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu & Search Button Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 animate-fadeIn">
            <div className="flex flex-col space-y-1 pb-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-sky-50 text-sky-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-sky-500" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2 px-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-sky-600 text-white font-semibold text-sm shadow-sm"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Submit Business Enquiry</span>
                </Link>
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
