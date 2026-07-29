import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, CheckCircle, LandmarkIcon, Briefcase } from 'lucide-react';

const ProfessionalServices = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo mb-2">
          <Landmark className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Web Apps for <br />
          <span className="bg-gradient-to-r from-brand-indigo to-brand-purple bg-clip-text text-transparent">
            Professional Services
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Modern portal designs, secure digital consultation pipelines, and invoice systems built for legal, financial, and business consultancies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Trust, Credibility, and Security</h2>
          <p className="text-gray-400 leading-relaxed">
            Professional firms require interfaces that communicate reliability. We help design beautiful websites that present your credentials, client results, and practice verticals clearly, whilst offering secure, gated client-portals to exchange private agreements and verify appointments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Briefcase className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Practice Listings</h4>
              <p className="text-xs text-gray-400">Manage separate descriptions, profiles, and case histories for advisors.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <LandmarkIcon className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Client Portal</h4>
              <p className="text-xs text-gray-400">Encrypted transmission systems, document downloads, and meeting scheduling tools.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Secure Client Portals',
              'Appointment Calendars',
              'Case Studies lists',
              'Legal disclaimer pages',
              'Service quotes calculators',
              'Document download centers'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold rounded-xl text-sm">
              Upgrade Firm Web
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServices;
