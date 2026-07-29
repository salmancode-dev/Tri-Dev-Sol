import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Home, Landmark, HardHat, HeartPulse, Truck, ShoppingBag, Palmtree, GraduationCap, Dumbbell, ArrowRight } from 'lucide-react';

const industryList = [
  { icon: Building2, name: 'Startups', path: '/industries/startups', desc: 'Accelerated development frameworks built to help new companies launch MVPs rapidly.' },
  { icon: Home, name: 'Real Estate', path: '/industries/real-estate', desc: 'Beautiful portal listings, map filters, agent panels, and automated valuation models.' },
  { icon: Landmark, name: 'Professional Services', path: '/industries/professional-services', desc: 'Web apps for consulting, accounting, law firms, and legal service panels.' },
  { icon: HardHat, name: 'Construction', path: '/industries/construction', desc: 'Site scheduling tools, client-billing dashboards, and bidding portals.' },
  { icon: HeartPulse, name: 'Healthcare', path: '/industries/healthcare', desc: 'Secure appointment booking, client portals, and healthcare listings.' },
  { icon: Truck, name: 'Logistics', path: '/industries/logistics', desc: 'Tracking maps, order delivery logs, freight scheduling pipelines.' },
  { icon: ShoppingBag, name: 'Ecommerce', path: '/industries/ecommerce', desc: 'Headless shopping layouts, checkout flows, and product catalog management.' },
  { icon: Palmtree, name: 'Hospitality', path: '/industries/hospitality', desc: 'Booking calendars, room listings, reviews panels, and local guide features.' },
  { icon: GraduationCap, name: 'Education', path: '/industries/education', desc: 'LMS course layouts, student logins, exam trackers, and lesson dashboards.' },
  { icon: Dumbbell, name: 'Fitness', path: '/industries/fitness', desc: 'Client workout routines, scheduling systems, trainer booking, and diet logs.' }
];

const IndustriesOverview = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Sectors We <span className="bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-pink bg-clip-text text-transparent">Serve</span>
        </h1>
        <p className="text-gray-400">
          Tailored user flows, performance benchmarks, and regulatory templates customized for your industry vertical.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industryList.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-dark-card border border-white/5 hover:border-white/15 rounded-3xl p-8 hover:bg-white/[0.01] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors duration-200">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              <Link
                to={ind.path}
                className="inline-flex items-center space-x-2 text-sm text-brand-purple hover:text-white font-bold transition-all group-hover:translate-x-1"
              >
                <span>Read details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustriesOverview;
