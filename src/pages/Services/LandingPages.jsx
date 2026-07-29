import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, CheckCircle, Target, Sparkles } from 'lucide-react';

const LandingPages = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 mb-2">
          <Layout className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Landing <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Pages
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Convert visitors into paying customers. We build pixel-perfect, highly responsive marketing pages with 99+ Core Web Vitals performance rankings.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Conversion Optimization Focus</h2>
          <p className="text-gray-400 leading-relaxed">
            A landing page is a sales representative that works 24/7. We design templates focused on clear typography hierarchy, strong call-to-actions, and structural SEO meta data that ranks well on Google. We avoid sluggish JS plugins to guarantee instant load times.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Target className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">A/B Testing Alignment</h4>
              <p className="text-xs text-gray-400">Layout structures clean enough to integrate easily with Google Optimize or VWO.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Sparkles className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Interactive Transitions</h4>
              <p className="text-xs text-gray-400">Micro-animations that draw focus directly to your email collection forms.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Landing Capabilities</h3>
          <ul className="space-y-4">
            {[
              'Sleek modern visual headers',
              'Fast scroll-to navigation',
              'Mailchimp or ActiveCampaign sync',
              'Lead generation submission grids',
              'JSON-LD Schema structures',
              'Full responsive mobile scaling'
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
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl text-sm"
            >
              Order a Landing Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPages;
