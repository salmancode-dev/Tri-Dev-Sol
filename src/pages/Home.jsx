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
      <section className="relative min-h-[100svh] min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16 sm:pt-20">
        {/* Hero Image Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="/hero-bbg.webp"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 min-h-full min-w-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover object-center opacity-85"
          />
          {/* Subtle bottom fade to transition to the body color */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-dark-bg" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_60%)] pointer-events-none z-0" />
        
        {/* Animated Glow Balls */}
        <div className="absolute top-16 sm:top-20 left-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 sm:bottom-10 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

        {/* <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-xs text-brand-purple font-medium tracking-wide uppercase"
          >
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>Next-Gen Frontend Engineering Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] [text-shadow:0_4px_12px_rgba(0,0,0,0.5)]"
          >
            We Build Premium <br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-indigo to-brand-pink bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]"
          >
            Transforming complex business logic into lightning-fast, pixel-perfect web applications. Scale your product with our elite react developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-indigo hover:from-brand-indigo hover:to-brand-purple text-white font-bold rounded-2xl shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Launch Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </motion.div>
        </div> */}
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
                  <span>SaaS & Tech startups</span>
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
