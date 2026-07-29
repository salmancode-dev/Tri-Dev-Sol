import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Rocket, Monitor, Brain, Cpu, ShoppingCart, Layout, ArrowRight } from 'lucide-react';

const serviceList = [
  {
    icon: Code,
    name: 'Custom Web Application Development',
    path: '/services/custom-web-app',
    desc: 'High performance React and Next.js platforms built to handle complex enterprise workflows with custom databases.',
    color: 'text-blue-500'
  },
  {
    icon: Rocket,
    name: 'MVP Development',
    path: '/services/mvp-development',
    desc: 'Rapid product building methodologies designed to launch your startup MVP to market in less than 30 days.',
    color: 'text-purple-500'
  },
  {
    icon: Monitor,
    name: 'White-label Frontend Development',
    path: '/services/white-label-frontend',
    desc: 'Outsourced specialized React/Tailwind frontend execution that blends into your team under NDA agreements.',
    color: 'text-pink-500'
  },
  {
    icon: Brain,
    name: 'AI Feature Integration',
    path: '/services/ai-integration',
    desc: 'Implement large language model integrations, automated workflow triggers, and vector-driven recommendations.',
    color: 'text-amber-500'
  },
  {
    icon: Cpu,
    name: 'API Integration',
    path: '/services/api-integration',
    desc: 'Secure communication connections between your core applications and third-party systems like Stripe, Twilio or Salesforce.',
    color: 'text-emerald-500'
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Development',
    path: '/services/ecommerce-development',
    desc: 'Customized web shop development utilizing modern headless architectures or highly tuned Shopify storefronts.',
    color: 'text-red-500'
  },
  {
    icon: Layout,
    name: 'Landing Pages',
    path: '/services/landing-pages',
    desc: 'High-converting lead acquisition pages with extreme speeds, structured SEO data, and beautiful layouts.',
    color: 'text-indigo-500'
  }
];

const ServicesOverview = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Our <span className="bg-gradient-to-r from-brand-purple to-brand-indigo bg-clip-text text-transparent">Services</span>
        </h1>
        <p className="text-gray-400">
          We bring specialized engineering knowledge, modern UI kits, and structured project lifecycles to deliver value.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, i) => {
          const Icon = service.icon;
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
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <Link
                to={service.path}
                className="inline-flex items-center space-x-2 text-sm text-brand-purple hover:text-white font-bold transition-all group-hover:translate-x-1"
              >
                <span>Explore page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesOverview;
