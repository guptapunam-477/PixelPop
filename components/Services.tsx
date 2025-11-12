
import React, {useRef} from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const ServiceCard: React.FC<{icon: React.ReactNode, title: string, items: string[]}> = ({icon, title, items}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, 0.2);

    return (
    <div ref={ref} className={`glass-card rounded-3xl p-6 md:p-8 reveal ${isVisible ? 'active' : ''}`}>
        <div className="mb-6">
            <div className="glass-strong rounded-2xl p-4 w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                {icon}
            </div>
        </div>
        <h3 className='text-xl md:text-2xl font-bold mb-4 text-[#1a202c]'>{title}</h3>
        <ul className='space-y-2 md:space-y-3 text-sm md:text-base text-gray-700'>
            {items.map((item, i) => (
            <li key={i} className="flex items-start">
                <span className="text-[#3CC61A] mr-2 md:mr-3 mt-1 text-lg md:text-xl">✓</span>
                <span>{item}</span>
            </li>
            ))}
        </ul>
    </div>
    );
};

const Services: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

  const servicesData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>,
      title: 'Design Excellence',
      items: ['Website Design', 'Mobile App Design', 'UI/UX Design & Audit', 'Product Design'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: 'Technology Solutions',
      items: ['Web Development', 'Mobile Apps Development', 'Web Apps Development', 'System Architecture'],
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: 'Digital Marketing',
      items: ['Performance Marketing', 'WhatsApp Marketing', 'SEO Optimization', 'Growth Strategy'],
    },
  ];

  return (
    <section id='services' className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive digital solutions to elevate your brand and drive growth
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
