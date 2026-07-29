import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, MapPin, Eye } from 'lucide-react';

const RealEstate = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink mb-2">
          <Home className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Solutions for <br />
          <span className="bg-gradient-to-r from-brand-pink to-rose-500 bg-clip-text text-transparent">
            Real Estate
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Stunning listings, map-based property search interfaces, and robust CRM synchronization for brokers and housing agencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Interactive Property Discovery</h2>
          <p className="text-gray-400 leading-relaxed">
            Real estate portals rely heavily on speed and responsive filtering. Users expect to filter listings by price, location, and bedroom counts without page-reloads. We build fast, indexed client search layouts connected directly to backend property management portals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <MapPin className="w-6 h-6 text-brand-pink" />
              <h4 className="font-bold text-white">Geographical Filters</h4>
              <p className="text-xs text-gray-400">Mapbox or Google Maps integrations with customized search boundary tools.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Eye className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Virtual Galleries</h4>
              <p className="text-xs text-gray-400">High-performance media carousels and immersive virtual tours components.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Advanced listing filters',
              'Map boundaries searches',
              'Agent profile panels',
              'Lead generation forms',
              'Auto MLS sync tools',
              'Property bookmarks list'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-brand-pink to-rose-500 text-white font-bold rounded-xl text-sm">
              Launch Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
