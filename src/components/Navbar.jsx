import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Building } from 'lucide-react';
import logo from '../assets/mainlogo.svg';

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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: 6,
      scale: 0.97,
      transition: { duration: 0.12, ease: 'easeIn' }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(3,0,20,0.95)' : '#030014',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(255,255,255,0.05)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={logo}
              alt="TriDevSol"
              style={{ height: '48px', width: 'auto', objectFit: 'contain', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav">
            <NavLink
              to="/"
              end
              className="nav-link-item"
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`nav-link-item ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  background: 'none', border: 'none', cursor: 'pointer',
                }}
              >
                <span>Services</span>
                <ChevronDown style={{
                  width: '15px', height: '15px',
                  transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s'
                }} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      position: 'absolute', left: 0, top: 'calc(100% + 12px)',
                      width: '280px',
                      background: 'linear-gradient(135deg, rgba(15,3,8,0.98) 0%, rgba(10,2,5,0.98) 100%)',
                      border: '1px solid rgba(232,67,90,0.15)',
                      borderRadius: '16px',
                      padding: '16px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(120,10,30,0.12)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid rgba(232,67,90,0.1)' }}>
                      <Sparkles style={{ width: '14px', height: '14px', color: '#E8435A' }} />
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Our Expertise</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {services.map((service, index) => (
                        <NavLink
                          key={index}
                          to={service.path}
                          className="dropdown-item-link"
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`nav-link-item ${location.pathname.startsWith('/industries') ? 'active' : ''}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  background: 'none', border: 'none', cursor: 'pointer',
                }}
              >
                <span>Industries</span>
                <ChevronDown style={{
                  width: '15px', height: '15px',
                  transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s'
                }} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      position: 'absolute', left: 0, top: 'calc(100% + 12px)',
                      width: '240px',
                      background: 'linear-gradient(135deg, rgba(15,3,8,0.98) 0%, rgba(10,2,5,0.98) 100%)',
                      border: '1px solid rgba(232,67,90,0.15)',
                      borderRadius: '16px',
                      padding: '16px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(120,10,30,0.12)',
                      backdropFilter: 'blur(20px)',
                      maxHeight: '400px',
                      overflowY: 'auto',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid rgba(232,67,90,0.1)' }}>
                      <Building style={{ width: '14px', height: '14px', color: '#E8435A' }} />
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Sectors We Serve</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {industries.map((ind, index) => (
                        <NavLink
                          key={index}
                          to={ind.path}
                          className="dropdown-item-link"
                        >
                          {ind.name}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/blog"
              className="nav-link-item"
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link-item"
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link-item"
            >
              Contact
            </NavLink>
          </div>

          {/* Book a Call CTA */}
          <div className="desktop-cta" style={{ display: 'none' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 22px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#000',
                backgroundColor: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e5e5e5'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book a call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '8px', borderRadius: '10px',
                color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              {isOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
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
            style={{
              background: 'rgba(10,5,36,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 24px 28px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <NavLink to="/" end className="mobile-nav-link">Home</NavLink>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`mobile-nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span>Services</span>
                  <ChevronDown style={{ width: '16px', height: '16px', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ paddingLeft: '16px', overflow: 'hidden' }}
                    >
                      {services.map((service, index) => (
                        <NavLink key={index} to={service.path} className="mobile-sub-link">
                          {service.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className={`mobile-nav-link ${location.pathname.startsWith('/industries') ? 'active' : ''}`}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span>Industries</span>
                  <ChevronDown style={{ width: '16px', height: '16px', transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ paddingLeft: '16px', overflow: 'hidden' }}
                    >
                      {industries.map((ind, index) => (
                        <NavLink key={index} to={ind.path} className="mobile-sub-link">
                          {ind.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/blog" className="mobile-nav-link">Blog</NavLink>
              <NavLink to="/about" className="mobile-nav-link">About us</NavLink>
              <NavLink to="/contact" className="mobile-nav-link">Contact</NavLink>

              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '12px', borderRadius: '10px',
                    backgroundColor: '#fff', color: '#000',
                    fontWeight: 600, fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  Book a call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-item {
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.85);
          background: transparent;
          transition: all 0.2s ease;
        }
        .nav-link-item:hover {
          color: #E8435A;
          background: rgba(232, 67, 90, 0.1);
        }
        .nav-link-item.active {
          color: #E8435A;
          background: rgba(232, 67, 90, 0.15);
          font-weight: 600;
        }

        .dropdown-item-link {
          display: block;
          padding: 8px 12px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.15s ease;
        }
        .dropdown-item-link:hover,
        .dropdown-item-link.active {
          background: rgba(232, 67, 90, 0.15);
          color: #E8435A;
        }

        .mobile-nav-link {
          display: block;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #E8435A;
          background: rgba(232, 67, 90, 0.12);
        }

        .mobile-sub-link {
          display: block;
          padding: 8px 12px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.15s ease;
        }
        .mobile-sub-link:hover,
        .mobile-sub-link.active {
          color: #E8435A;
          background: rgba(232, 67, 90, 0.1);
        }

        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
