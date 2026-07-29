import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, CheckCircle, Hammer, Shield } from 'lucide-react';

const Construction = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-2">
          <HardHat className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Digital Systems for <br />
          <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Construction
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Bespoke client management systems, online bid submittals, progress trackers, and highly interactive project galleries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Streamline Project Delivery</h2>
          <p className="text-gray-400 leading-relaxed">
            In construction, coordination errors cost money. We build interactive tracking layouts where project managers can log milestones, share photos of sites with clients, and manage subcontractor checklists. This reduces office overhead and keeps clients aligned.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Hammer className="w-6 h-6 text-amber-500" />
              <h4 className="font-bold text-white">Progress Logs</h4>
              <p className="text-xs text-gray-400">Timelines, image carousels, and client sign-off verification modules.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Shield className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Safety & Compliance</h4>
              <p className="text-xs text-gray-400">Secure vaults to host permits, safety guidelines, and subcontractor licenses.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Interactive Project Galleries',
              'Subcontractor Bid Panels',
              'Client Progress Portals',
              'Milestones Gantt charts',
              'Equipment scheduling logs',
              'Quote estimate requests'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl text-sm">
              Request Project App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
