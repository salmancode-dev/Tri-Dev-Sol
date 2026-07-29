import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const services = [
  { name: 'Custom Web Dev', path: '/services/custom-web-app' },
  { name: 'MVP Development', path: '/services/mvp-development' },
  { name: 'White-label Frontend', path: '/services/white-label-frontend' },
  { name: 'AI Feature Integration', path: '/services/ai-integration' },
  { name: 'API Integration', path: '/services/api-integration' },
  { name: 'E-commerce Dev', path: '/services/ecommerce-development' },
  { name: 'Landing Pages', path: '/services/landing-pages' }
];

const industries = [
  { name: 'Startups', path: '/industries/startups' },
  { name: 'Real Estate', path: '/industries/real-estate' },
  { name: 'Professional Services', path: '/industries/professional-services' },
  { name: 'Construction', path: '/industries/construction' },
  { name: 'Healthcare', path: '/industries/healthcare' },
  { name: 'Logistics', path: '/industries/logistics' },
  { name: 'Ecommerce', path: '/industries/ecommerce' }
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark-bg/95 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-indigo flex items-center justify-center shadow-lg shadow-brand-purple/20">
                <span className="text-white font-extrabold text-xl">T</span>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">
                TriDev<span className="bg-gradient-to-r from-brand-indigo to-brand-pink bg-clip-text text-transparent">Sol</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              We engineer beautiful web experiences, robust AI integrations, and rapid MVPs to launch your venture to the next level. Let's build your next digital solution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-purple transition-colors duration-300" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-indigo transition-colors duration-300" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-sm hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Industries */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Industries</h3>
            <ul className="space-y-3">
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-sm hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="text-sm text-brand-purple hover:underline">
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors duration-200">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-white/5 space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-purple" />
                <span className="text-xs">hello@tridevsol.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-indigo" />
                <span className="text-xs">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} TriDevSol. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-xs hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-xs hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
