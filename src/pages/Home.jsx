import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, Monitor, Brain, Cpu, ShoppingCart, LayoutGrid, CheckCircle } from 'lucide-react';

const heroServices = [
  { name: 'Custom Web Dev', desc: 'Enterprise scalable React and Next.js applications.', icon: Code, color: 'from-blue-500 to-indigo-500', path: '/services/custom-web-app' },
  { name: 'MVP Development', desc: 'Go from concept to product deployment in 4 weeks.', icon: Rocket, color: 'from-purple-500 to-pink-500', path: '/services/mvp-development' },
  { name: 'AI Feature Integration', desc: 'Add LLM wrappers, agents and neural tools.', icon: Brain, color: 'from-amber-500 to-red-500', path: '/services/ai-integration' }
];

const Home = () => {
  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1.5rem',
          overflow: 'hidden',
          paddingTop: '72px',
          backgroundColor: '#030014',
        }}
      >
        {/* Main glow - dark mehron/maroon */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 45% 32% at 50% 22%, rgba(113, 0, 45, 0.8) 0%, rgba(100,5,45,0.45) 45%, rgba(3,0,20,0) 72%)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        {/* Inner bright core - mehron highlight */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 22% 15% at 50% 12%, rgba(200,20,80,0.35) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(230, 0, 0, 0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
          background: 'linear-gradient(to bottom, transparent, #030014)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>

          {/* Booking badge - matches screenshot's "Booking Q3 2025 project slots" pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '100px',
              fontSize: '0.75rem', fontWeight: 500,
              color: '#8b8989ff',
              marginBottom: '2rem',
              border: '2px solid #000000ff',
            }}
          >
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: '#04ec00ff',
              display: 'inline-block',
              boxShadow: '0 0 8px #a2a2a2',
            }} />
            <span>Booking Q3 2026 project slots</span>
          </motion.div>

          {/* Main Headline - matches screenshot typography */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Web applications built by<br />
            developers, not templates.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            TriDevSol is a software agency for founders and operators across 20 countries who need custom web apps, MVPs, and AI features shipped by senior engineers — not outsourced to a freelancer chain.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px',
                backgroundColor: '#fff', color: '#000',
                fontWeight: 700, fontSize: '0.9rem',
                borderRadius: '10px', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e8e8e8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book a free strategy call
            </Link>

            <Link
              to="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px',
                backgroundColor: 'transparent', color: 'rgba(255,255,255,0.85)',
                fontWeight: 600, fontSize: '0.9rem',
                border: 'none',
                borderRadius: '10px', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
            >
              See our work <span style={{ marginLeft: '4px' }}>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Core Services
          </h2>
          <p className="text-gray-400">
            Tailored engineering processes built to address the unique scaling needs of modern brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heroServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-dark-card border border-white/5 hover:border-white/15 rounded-3xl p-8 hover:bg-white/[0.02] transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>

                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 text-sm text-brand-purple font-bold hover:text-white transition-colors duration-200 group-hover:translate-x-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center space-x-2 text-brand-indigo hover:text-brand-purple font-bold text-sm">
            <span>View All 7 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Industries CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-dark-card via-brand-purple/5 to-brand-indigo/5 border border-white/10 rounded-[32px] p-8 sm:p-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right_center,rgba(99,102,241,0.1)_0,transparent_50%)] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Built for scale</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Empowering businesses across all industries.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Whether you are a startup raising seed money or a massive real estate portal, we engineer tools specifically tailored to your vertical's regulatory and performance standards.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-purple" />
                  <span>Real Estate Tech</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-purple" />
                  <span>Healthcare Tech</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-purple" />
                  <span>Ecommerce Tech</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-purple" />
                  <span>SaaS &amp; Tech startups</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  to="/industries"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102"
                >
                  <span>Explore 10 Industries</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-2">
                  <span className="text-2xl font-extrabold text-brand-purple">10+</span>
                  <p className="text-xs text-gray-400">Industries targeted</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-2">
                  <span className="text-2xl font-extrabold text-brand-indigo">99%</span>
                  <p className="text-xs text-gray-400">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-2">
                  <span className="text-2xl font-extrabold text-brand-pink">24h</span>
                  <p className="text-xs text-gray-400">Response Window</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl space-y-2">
                  <span className="text-2xl font-extrabold text-white">25+</span>
                  <p className="text-xs text-gray-400">Completed Routes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
