import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

const Healthcare = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-2">
          <HeartPulse className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          Web Apps for <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Healthcare
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Secure client systems, appointment booking calendars, and directory panels for medical consultants, clinics, and wellness centers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Security & Intuitive Patient Care</h2>
          <p className="text-gray-400 leading-relaxed">
            Healthcare digital portals must focus heavily on secure transfers and accessibility. We construct web frontends that are lightweight, easy to navigate for patients of all ages, and integrate with booking backends securely.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <h4 className="font-bold text-white">Compliance Standard</h4>
              <p className="text-xs text-gray-400">Secure encrypted inputs, data storage best practices, and cookies consent.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Heart className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Wellness Portals</h4>
              <p className="text-xs text-gray-400">Engaging patient dashboards to view schedule logs, care instructions, and clinic guides.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Secure Patient intake forms',
              'Clinic Location directories',
              'Interactive Doctor schedules',
              'Appointment reminders system',
              'Wellness progress charts',
              'Patient feedback modules'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl text-sm">
              Request Health App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
