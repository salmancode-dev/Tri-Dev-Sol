import React from 'react';
import { Users, Shield, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          About <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">TriDevSol</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          We are a design-led software engineering group. We help fast-growing startups and established enterprises design, develop, and scale state-of-the-art products.
        </p>
      </div>

      {/* Grid Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
          <Users className="w-10 h-10 text-brand-purple mb-6" />
          <h3 className="text-lg font-bold text-white mb-2">Elite Engineering</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Our engineers pass rigorous standards to deliver pixel-perfect React code bases and clean architecture.
          </p>
        </div>
        <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
          <Shield className="w-10 h-10 text-brand-indigo mb-6" />
          <h3 className="text-lg font-bold text-white mb-2">Absolute Integrity</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transparent sprint updates, clear expectations, and regular client feedback cycles.
          </p>
        </div>
        <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
          <Target className="w-10 h-10 text-brand-pink mb-6" />
          <h3 className="text-lg font-bold text-white mb-2">Speed to Market</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We focus on shipping MVPs rapidly so you can get user feedback and raise capital faster.
          </p>
        </div>
        <div className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
          <Award className="w-10 h-10 text-amber-500 mb-6" />
          <h3 className="text-lg font-bold text-white mb-2">Customer Success</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We support you pre-launch, during development, and post-launch with ongoing maintenance.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-gradient-to-br from-dark-card to-white/[0.02] border border-white/5 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To bridge the gap between creative design and robust systems. We believe that technology should not only perform efficiently but also look outstanding and feel intuitive to the end user.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Founded with a vision of remote-first engineering excellence, TriDevSol has helped build and launch projects across E-commerce, Logistics, Startups, Healthcare, and SaaS applications.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center space-y-4">
          <div className="text-4xl font-black text-white">100% Remote</div>
          <div className="text-sm text-brand-purple font-semibold uppercase tracking-wider">Serving Globally</div>
          <p className="text-xs text-gray-500 max-w-xs mx-auto">
            Our team operates globally to ensure continuous cycle development and active coverage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
