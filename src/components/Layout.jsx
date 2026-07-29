import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// ScrollToTop resets scroll position when router pathname changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-gray-200 antialiased selection:bg-brand-purple/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
