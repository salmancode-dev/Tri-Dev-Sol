import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, CheckCircle, Flame, ShieldAlert, Cpu } from 'lucide-react';

const MvpDevelopment = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-500 mb-2">
          <Rocket className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          MVP <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Development
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Go from concept outline to a live product in the hands of real users in 4 weeks. Build core features fast without compromising on visual polish.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Speed to Market is Key</h2>
          <p className="text-gray-400 leading-relaxed">
            The biggest risk to a software startup is building something nobody wants. We help founders trim unnecessary feature lists, select clean backend schemas, and launch an elegant, professional platform in record times so they can gather genuine user feedback and iterate.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Flame className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Agile Prototyping</h4>
              <p className="text-xs text-gray-400">Weekly visual updates, rapid adjustments, and prototype review stages.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <ShieldAlert className="w-6 h-6 text-brand-pink" />
              <h4 className="font-bold text-white">Risk Mitigation</h4>
              <p className="text-xs text-gray-400">Avoid feature creep. We focus strictly on features that validate your core hypothesis.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">MVP Framework</h3>
          <ul className="space-y-4">
            {[
              'Scoping & wireframing support',
              'Core Database integrations',
              'Authentication & authorization',
              'Stripe subscriptions or payments',
              'Responsive web application layout',
              'Full deployment and setup transfers'
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
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl text-sm"
            >
              Start Your MVP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MvpDevelopment;
