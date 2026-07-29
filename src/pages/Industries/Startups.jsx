import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, Cpu, ShieldCheck } from 'lucide-react';

const Startups = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple mb-2">
          <Building2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Software Solutions for <br />
          <span className="bg-gradient-to-r from-brand-purple to-brand-indigo bg-clip-text text-transparent">
            Startups
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Accelerate your development cycle, optimize your SaaS infrastructure, and launch a polished tech product to satisfy your early adapters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Scale Rapidly</h2>
          <p className="text-gray-400 leading-relaxed">
            Startups require speed above all else. We help you pick the right tech stacks (like Vite, Next.js, and Supabase) that minimize initial licensing fees and scale smoothly under load. Our code is clean and modular, keeping technical debt low.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Cpu className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Modern Tech Stacks</h4>
              <p className="text-xs text-gray-400">Lean build times, automated CI/CD releases, and global content delivery.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <ShieldCheck className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Launch Ready</h4>
              <p className="text-xs text-gray-400">Integrated analytics tracking, SEO setup, and cookie banners.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'SaaS Dashboard setups',
              'Sub-module billing options',
              'Analytics event hooks',
              'Multi-tenancy architectures',
              'Instant search tools',
              'API security audits'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-brand-purple to-brand-indigo text-white font-bold rounded-xl text-sm">
              Schedule Scoping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
