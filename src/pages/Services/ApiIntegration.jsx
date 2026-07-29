import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, CheckCircle, RefreshCw, Key, ShieldCheck } from 'lucide-react';

const ApiIntegration = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-2">
          <Cpu className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          API <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Integration
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Unify your digital ecosystem. We connect frontend designs with third-party service gates, payment methods, CRM engines, and ERP platforms securely.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">System Connectivity & Automation</h2>
          <p className="text-gray-400 leading-relaxed">
            A software application is only as powerful as its integrations. We specialize in mapping clean request/response schemas, building custom middleware webhooks to handle real-time syncs, and configuring robust error-handling layers to ensure your platform never drops critical transactions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <RefreshCw className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Webhook Systems</h4>
              <p className="text-xs text-gray-400">Configure listener scripts that trigger real-time updates across platforms.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Key className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">OAuth & Authorization</h4>
              <p className="text-xs text-gray-400">Standardize multi-provider sign-ins through OAuth2 and single-sign-on systems.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">API Framework</h3>
          <ul className="space-y-4">
            {[
              'Stripe & PayPal billing setup',
              'Salesforce & HubSpot CRM sync',
              'SendGrid & Twilio alerts',
              'Custom REST & GraphQL endpoints',
              'Secure API keys mapping',
              'JSON schema validation setups'
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
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl text-sm"
            >
              Request API Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
