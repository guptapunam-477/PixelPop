import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    // Cleanup function to remove class when component unmounts
    return () => {
        document.body.classList.remove('body-no-scroll');
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <header className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-5 transition-all duration-300 ease-in-out ${isScrolled ? 'scrolled' : ''}`} style={{ background: isScrolled ? 'rgba(255, 255, 255, 0.09)' : 'transparent', backdropFilter: isScrolled ? 'blur(7px)' : 'none', WebkitBackdropFilter: isScrolled ? 'blur(7px)' : 'none', borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.44)' : '1px solid transparent' }}>
        <a href="#hero" className="flex items-center gap-3 z-50">
          <div className="glass-strong rounded-xl p-2">
            <svg className="w-8 h-8 text-[#5A99FC]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 14H3C2.44772 14 2 13.5523 2 13V5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V13C22 13.5523 21.5523 14 21 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 20L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className='text-lg sm:text-xl md:text-2xl font-bold gradient-text'>PixelPop Digi</span>
        </a>

        <nav className='hidden md:flex gap-8 text-lg font-medium'>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className='hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2 py-1'>{link.label}</a>
          ))}
        </nav>

        <div className='hidden md:flex'>
          <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" className='btn-primary'>Book Call</a>
        </div>

        <button id='menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2 rounded-lg glass z-50 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2' aria-label='Open navigation menu' aria-expanded={isMenuOpen}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6 text-[#1a202c]'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{background: 'rgba(245, 247, 250, 0.8)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={handleLinkClick} className='text-3xl font-bold hover:gradient-text transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-2'>{link.label}</a>
        ))}
        <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className='btn-primary min-h-[44px] flex items-center justify-center text-lg mt-4'>Book Call</a>
      </div>
    </>
  );
};

export default Header;