import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle, Navigation, MapPin } from 'lucide-react';

const Logistics = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 mb-2">
          <Truck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Web Portals for <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Logistics
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Real-time order tracking panels, scheduling grids, custom rate calculators, and shipment management portals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Visualizing Supply Chain Operations</h2>
          <p className="text-gray-400 leading-relaxed">
            In logistics, customers expect transparency. We help fleet companies and freight forwarders build custom dashboards where clients can track delivery status on maps, calculate shipping costs, and download compliance certificates instantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Navigation className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Realtime Mapping</h4>
              <p className="text-xs text-gray-400">Map routing components that update package status markers dynamically.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <MapPin className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Hub Management</h4>
              <p className="text-xs text-gray-400">Organize and display pickup points and storage depot coordinates.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Client order tracking sheets',
              'Shipping rates calculators',
              'Dispatch schedule managers',
              'Subcontractor invoice portals',
              'Automated status updates webhooks',
              'Transit reports export tools'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl text-sm">
              Build Logistics Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
