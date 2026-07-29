import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CheckCircle, CreditCard, ShoppingBag, Eye } from 'lucide-react';

const EcommerceDevelopment = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 mb-2">
          <ShoppingCart className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          E-commerce <br />
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Development
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Create high-conversion online stores. We develop custom shopping interfaces, headless Shopify frontends, and backend product panels.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Modern Retail Engineering</h2>
          <p className="text-gray-400 leading-relaxed">
            Slow load times directly destroy e-commerce sales. By utilizing React-based fast static builds and headless content systems, we construct shopping storefronts that load instantly, score perfect Google Lighthouse targets, and guide shoppers smoothly to conversion.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <CreditCard className="w-6 h-6 text-brand-pink" />
              <h4 className="font-bold text-white">Seamless Checkout</h4>
              <p className="text-xs text-gray-400">One-click checkouts, local payment gates, and automated tax calculations.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <ShoppingBag className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Product Cataloging</h4>
              <p className="text-xs text-gray-400">Advanced multi-category filtering, custom attribute variants, and inventory tracking.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Store Capabilities</h3>
          <ul className="space-y-4">
            {[
              'Headless Shopify setups',
              'Custom basket & cart managers',
              'Multi-currency processing',
              'Admin inventory dashboards',
              'Instant search & filter arrays',
              'Abandoned cart webhook alerts'
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
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl text-sm"
            >
              Request E-commerce
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDevelopment;
