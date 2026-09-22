import React from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Pill, Layers, MessageSquareText, 
  Briefcase, LogOut, ShieldCheck, Lock, ExternalLink
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { COMPANY_INFO } from '../../data/mockData';

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products Catalog', path: '/admin/products', icon: Pill },
    { name: 'Therapeutic Categories', path: '/admin/categories', icon: Layers },
    { name: 'Business Enquiries', path: '/admin/enquiries', icon: MessageSquareText },
    { name: 'Job Openings', path: '/admin/careers', icon: Briefcase },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Admin Header Brand */}
          <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
              T
            </div>
            <div>
              <div className="font-extrabold text-sm text-white tracking-tight">TORRANCE ADMIN</div>
              <p className="text-[10px] text-sky-400 font-medium uppercase tracking-wider">Management Portal</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info & Actions */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
            <div className="font-semibold text-white truncate">{user?.name || 'Administrator'}</div>
            <div className="text-slate-400 text-[10px] truncate">{user?.email || 'admin@torancelifescience.com'}</div>
            <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-sky-950 text-sky-400 text-[10px] font-bold border border-sky-800/40">
              {user?.role || 'SUPER_ADMIN'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center space-x-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Site</span>
            </a>

            <button
              onClick={handleLogout}
              className="py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold flex items-center justify-center space-x-1"
              title="Logout session"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Administrative Workspace */}
      <main className="flex-1 p-6 sm:p-10 overflow-x-hidden">
        <Outlet />
      </main>

    </div>
  );
};
