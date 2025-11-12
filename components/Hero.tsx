
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className='relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden'>
      <div className='relative max-w-5xl mx-auto z-10 glass-card rounded-3xl p-6 sm:p-8 md:p-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight smooth-bounce-in'>
          <span className="gradient-text">Digital Excellence</span><br/>
          <span className="text-[#1a202c]">That Converts</span>
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed smooth-bounce-in delay-1'>
          We design & build stunning websites, apps, and growth engines with clean UI, 
          <span className="font-semibold gradient-text"> tasteful motion</span>, and measurable ROI.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center smooth-bounce-in delay-2'>
          <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" className='btn-primary pulse-glow'>
            Start Your Project
          </a>
          <a href='#services' className='btn-secondary'>
            Explore Services
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 glass-card rounded-2xl p-4 float hidden lg:block z-10">
        <div className="text-3xl">🚀</div>
      </div>
      <div className="absolute bottom-20 right-10 glass-card rounded-2xl p-4 float-reverse hidden lg:block z-10">
        <div className="text-3xl">✨</div>
      </div>
      <div className="absolute top-1/2 left-5 glass-card rounded-2xl p-4 float hidden xl:block z-10">
        <div className="text-2xl">💡</div>
      </div>
    </section>
  );
};

export default Hero;