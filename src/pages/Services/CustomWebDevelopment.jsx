import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, Database, Server, Smartphone } from 'lucide-react';

const CustomWebDevelopment = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 mb-2">
          <Code className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Custom Web <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Application Development
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          We design and build bespoke web portals, dashboard panels, and SaaS architectures using top-tier technologies like React, Node.js, and Postgres.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Engaging Enterprise Scalability</h2>
          <p className="text-gray-400 leading-relaxed">
            Our custom development processes prioritize speed, security, and component reusability. Whether you require real-time charting systems or multi-role permissions levels, we architect codebase structures that sustain growth without turning into legacy systems.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Database className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Database Design</h4>
              <p className="text-xs text-gray-400">Structured normalization, secure indexes, and fast caching configurations.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Server className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Cloud Hosting</h4>
              <p className="text-xs text-gray-400">Automated deployment pipelines to AWS, Vercel, or Google Cloud.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Key Capabilities</h3>
          <ul className="space-y-4">
            {[
              'Single Page Applications (SPA)',
              'Server-Side Rendered portals',
              'Highly modular component trees',
              'Realtime WebSocket endpoints',
              'Secure JWT authentication',
              'TypeScript native architectures'
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
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWebDevelopment;
