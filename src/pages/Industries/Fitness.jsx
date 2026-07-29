import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, CheckCircle, Flame, Calendar } from 'lucide-react';

const Fitness = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink mb-2">
          <Dumbbell className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Web Apps for <br />
          <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
            Fitness & Health
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Personal trainer booking schedules, workout routine trackers, dietary log sheets, and health club membership panels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Drive Member Retention</h2>
          <p className="text-gray-400 leading-relaxed">
            Gyms and online coaches depend heavily on active user engagement. We help fitness clubs deploy modern portals where gym members can book training slots, log daily protein targets, and interact with instructional videos easily.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Calendar className="w-6 h-6 text-brand-pink" />
              <h4 className="font-bold text-white">Class Scheduling</h4>
              <p className="text-xs text-gray-400">Class timing grids, booking slots, and automated reminder alerts.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Flame className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Progress Logs</h4>
              <p className="text-xs text-gray-400">Weight trackers, nutrient macros counters, and achievement badges.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Trainer booking schedules',
              'Class vacancy grids lists',
              'Member routine databases',
              'Macro nutrient calculators',
              'Instruction video embeds',
              'Recurring membership logs'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold rounded-xl text-sm">
              Request Fitness App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
