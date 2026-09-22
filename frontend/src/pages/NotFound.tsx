import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Home as HomeIcon, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto">
          <Pill className="w-8 h-8" />
        </div>
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
          <p className="text-slate-500 text-sm">
            The page or medicine specification you requested could not be located.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-sky-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
