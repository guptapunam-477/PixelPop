import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
        document.body.classList.remove('body-no-scroll');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <header className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-5 transition-all duration-300 ease-in-out ${isScrolled ? 'scrolled' : ''}`} style={{ background: isScrolled ? 'rgba(255, 255, 255, 0.09)' : 'transparent', backdropFilter: isScrolled ? 'blur(7px)' : 'none', WebkitBackdropFilter: isScrolled ? 'blur(7px)' : 'none', borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.44)' : '1px solid transparent' }}>
        <Link to="/" className="flex items-center gap-3 z-50">
          <div className="glass-strong rounded-xl p-2">
            <svg className="w-8 h-8 text-[#5A99FC]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 14H3C2.44772 14 2 13.5523 2 13V5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V13C22 13.5523 21.5523 14 21 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 20L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className='text-lg sm:text-xl md:text-2xl font-bold gradient-text'>PixelPop Digi</span>
        </Link>

        <nav className='hidden lg:flex gap-6 text-base font-medium items-center'>
          <Link to="/" className={`hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1 ${isActive('/') ? 'text-[#5A99FC]' : ''}`}>Home</Link>
          
          <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button className={`hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1 flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-[#5A99FC]' : ''}`}>
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl p-2 shadow-lg">
                <Link to="/services/shopify-development" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">Shopify Development</Link>
                <Link to="/services/growth-marketing" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">Growth Marketing</Link>
                <Link to="/services/ui-ux-design" onClick={handleLinkClick} className="block px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">UI/UX Design</Link>
              </div>
            )}
          </div>

          <Link to="/case-studies" className={`hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1 ${isActive('/case-studies') ? 'text-[#5A99FC]' : ''}`}>Case Studies</Link>
          <Link to="/resources" className={`hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1 ${isActive('/resources') ? 'text-[#5A99FC]' : ''}`}>Resources</Link>
          <Link to="/about" className={`hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1 ${isActive('/about') ? 'text-[#5A99FC]' : ''}`}>About</Link>
          <Link to="/contact" className={`hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1 ${isActive('/contact') ? 'text-[#5A99FC]' : ''}`}>Contact</Link>
        </nav>

        <div className='hidden lg:flex'>
          <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" className='btn-primary'>Book a Free Strategy Call</a>
        </div>

        <button id='menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden p-2 rounded-lg glass z-50 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2' aria-label='Open navigation menu' aria-expanded={isMenuOpen}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6 text-[#1a202c]'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 lg:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{background: 'rgba(245, 247, 250, 0.8)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
        <Link to="/" onClick={handleLinkClick} className={`text-2xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center ${isActive('/') ? 'gradient-text' : ''}`}>Home</Link>
        
        <div className="text-center">
          <button onClick={() => setIsServicesOpen(!isServicesOpen)} className='text-2xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center'>
            Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isServicesOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
          {isServicesOpen && (
            <div className="mt-4 space-y-3">
              <Link to="/services/shopify-development" onClick={handleLinkClick} className="block text-xl text-gray-700 hover:gradient-text">Shopify Development</Link>
              <Link to="/services/growth-marketing" onClick={handleLinkClick} className="block text-xl text-gray-700 hover:gradient-text">Growth Marketing</Link>
              <Link to="/services/ui-ux-design" onClick={handleLinkClick} className="block text-xl text-gray-700 hover:gradient-text">UI/UX Design</Link>
            </div>
          )}
        </div>

        <Link to="/case-studies" onClick={handleLinkClick} className={`text-2xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center ${isActive('/case-studies') ? 'gradient-text' : ''}`}>Case Studies</Link>
        <Link to="/resources" onClick={handleLinkClick} className={`text-2xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center ${isActive('/resources') ? 'gradient-text' : ''}`}>Resources</Link>
        <Link to="/about" onClick={handleLinkClick} className={`text-2xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center ${isActive('/about') ? 'gradient-text' : ''}`}>About</Link>
        <Link to="/contact" onClick={handleLinkClick} className={`text-2xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center ${isActive('/contact') ? 'gradient-text' : ''}`}>Contact</Link>
        
        <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className='btn-primary min-h-[44px] flex items-center justify-center text-lg mt-4'>Book a Free Strategy Call</a>
      </div>
    </>
  );
};

export default Header;