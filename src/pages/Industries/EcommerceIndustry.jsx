import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, CheckCircle, Smartphone, Flame } from 'lucide-react';

const EcommerceIndustry = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink mb-2">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Solutions for <br />
          <span className="bg-gradient-to-r from-brand-pink to-rose-500 bg-clip-text text-transparent">
            E-commerce Brands
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          High-performance online shops, custom filters, headless cart engines, and integrations with payment and shipping pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Optimize the Purchase Funnel</h2>
          <p className="text-gray-400 leading-relaxed">
            In modern retail, page speed correlates directly with conversion metrics. We build React-based headless storefronts that fetch products instantly from database APIs, providing an organic feel to filters, shopping baskets, and checkouts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Smartphone className="w-6 h-6 text-brand-pink" />
              <h4 className="font-bold text-white">Mobile Commerce First</h4>
              <p className="text-xs text-gray-400">Layouts optimized for smartphones to maximize thumb-driven checkouts.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Flame className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Conversion Optimization</h4>
              <p className="text-xs text-gray-400">Eliminate step friction to reduce abandoned shopping carts.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Headless Shopify integrations',
              'Custom shopping cart state managers',
              'Advanced faceted search layouts',
              'Flexible payment gate connections',
              'Abandoned checkout automation hooks',
              'Analytics tracking metrics'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-brand-pink to-rose-500 text-white font-bold rounded-xl text-sm">
              Build E-commerce Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceIndustry;
