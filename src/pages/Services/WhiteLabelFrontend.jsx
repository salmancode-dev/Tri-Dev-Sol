import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, CheckCircle, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

const WhiteLabelFrontend = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-500 mb-2">
          <Monitor className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          White-label <br />
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Frontend Development
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Scale your digital agency capacity instantly. We engineer beautiful frontends for your clients under your brand with complete NDA protections.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Seamless Agency Expansion</h2>
          <p className="text-gray-400 leading-relaxed">
            Need elite React or Tailwind CSS developers but don't want the overhead of hiring full-time? TriDevSol acts as your silent engineering department. We communicate via your Slack, submit commits to your repository under your guidelines, and deliver flawless results.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <ShieldCheck className="w-6 h-6 text-brand-pink" />
              <h4 className="font-bold text-white">Strict Confidentiality</h4>
              <p className="text-xs text-gray-400">All work is protected under NDAs. No logo credits, no github public shares.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <HeartHandshake className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Direct Integration</h4>
              <p className="text-xs text-gray-400">Fits directly into your existing Jira workflows, Scrum calls, and review guidelines.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Agency Partnership</h3>
          <ul className="space-y-4">
            {[
              'Complete NDA protection',
              'Committed Git repository branches',
              'Figma to React conversion',
              'Sleek responsive web layouts',
              'CSS styling alignment reviews',
              'Flexible scaling commitments'
            ].map((benefit, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-white/5">
            <Link
              to="/contact"
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl text-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelFrontend;
