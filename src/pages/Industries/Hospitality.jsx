import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree, CheckCircle, Calendar, Star } from 'lucide-react';

const Hospitality = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-2">
          <Palmtree className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Web Portals for <br />
          <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Hospitality & Tourism
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Premium presentation sites, real-time booking calendars, virtual rooms showcase, and customer reviews platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Create Visual Desirability</h2>
          <p className="text-gray-400 leading-relaxed">
            In hospitality, your website is the digital front desk. We build stunning interfaces that emphasize high-resolution media galleries, present dining menus, show localized activity guides, and integrate booking forms to convert traffic into reservations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Calendar className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Reservation Calendars</h4>
              <p className="text-xs text-gray-400">Custom date range selection hooks with active vacancy checks.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Star className="w-6 h-6 text-amber-500" />
              <h4 className="font-bold text-white">Guest Reviews</h4>
              <p className="text-xs text-gray-400">Integrated feeds showcase reviews and stars rating panels.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Interactive Room displays',
              'Realtime vacancy Calendars',
              'Dining menu showcase grids',
              'Local activity guide panels',
              'Customer feedback widgets',
              'Custom booking forms templates'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl text-sm">
              Build Booking Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
