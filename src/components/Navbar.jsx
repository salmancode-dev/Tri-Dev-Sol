import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Building, Phone } from 'lucide-react';
import logo from '../assets/mainlogo.png';

// const WHATSAPP_NUMBER = 's1818245-8203';
// const WHATSAPP_DISPLAY = '1818 245-8203'; 

const WHATSAPP_NUMBER = '18182458203';
const WHATSAPP_DISPLAY = '+1 (818) 245-8203';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const services = [
  { name: 'Custom Web Application Development', path: '/services/custom-web-app' },
  { name: 'MVP Development', path: '/services/mvp-development' },
  { name: 'White-label Frontend Development', path: '/services/white-label-frontend' },
  { name: 'AI Feature Integration', path: '/services/ai-integration' },
  { name: 'API Integration', path: '/services/api-integration' },
  { name: 'E-commerce Development', path: '/services/ecommerce-development' },
  { name: 'Landing Pages', path: '/services/landing-pages' }
];

const industries = [
  { name: 'Startups', path: '/industries/startups' },
  { name: 'Real Estate', path: '/industries/real-estate' },
  { name: 'Professional Services', path: '/industries/professional-services' },
  { name: 'Construction', path: '/industries/construction' },
  { name: 'Healthcare', path: '/industries/healthcare' },
  { name: 'Logistics', path: '/industries/logistics' },
  { name: 'Ecommerce', path: '/industries/ecommerce' },
  { name: 'Hospitality', path: '/industries/hospitality' },
  { name: 'Education', path: '/industries/education' },
  { name: 'Fitness', path: '/industries/fitness' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'industries' | null
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and dropdowns on page transition
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location]);

  const navClass = "fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white shadow-sm";

  // Dropdown variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo / Brand */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src={logo}
              alt="TriDevSol"
              className="h-18 w-30 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>



          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-300 hover:text-[#00bf8f] ${isActive ? 'text-[#00bf8f]' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 text-sm font-semibold transition-colors duration-300 hover:text-[#00bf8f] cursor-pointer ${location.pathname.startsWith('/services') ? 'text-[#00bf8f]' : 'text-gray-700'
                }`}>
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl"
                  >
                    <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                      <Sparkles className="w-4 h-4 text-[#00bf8f]" />
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Our Expertise</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-[#00bf8f] transition-all duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 text-sm font-semibold transition-colors duration-300 hover:text-[#00bf8f] cursor-pointer ${location.pathname.startsWith('/industries') ? 'text-[#00bf8f]' : 'text-gray-700'
                }`}>
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl max-h-[420px] overflow-y-auto"
                  >
                    <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                      <Building className="w-4 h-4 text-[#00bf8f]" />
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sectors We Serve</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      {industries.map((ind, index) => (
                        <Link
                          key={index}
                          to={ind.path}
                          className="px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-[#00bf8f] transition-all duration-200"
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-300 hover:text-[#00bf8f] ${isActive ? 'text-[#00bf8f]' : 'text-gray-700'}`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-300 hover:text-[#00bf8f] ${isActive ? 'text-[#00bf8f]' : 'text-gray-700'}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-300 hover:text-[#00bf8f] ${isActive ? 'text-[#00bf8f]' : 'text-gray-700'}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop WhatsApp */}
          <div className="hidden lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-brand-purple hover:bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-purple"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      {industries.map((ind, index) => (
                        <Link
                          key={index}
                          to={ind.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-purple"
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/blog"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
              >
                Blog
              </Link>

              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-white/5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]  text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
