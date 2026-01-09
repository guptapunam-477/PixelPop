import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='relative py-10 sm:py-12'>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
           <div>
             <h3 className="font-bold text-xl mb-4 gradient-text">PixelPop Digi</h3>
             <p className="text-base text-gray-600">D2C-focused Shopify development and growth agency</p>
           </div>
           
           <div>
             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
             <ul className="space-y-2 text-gray-600">
               <li><Link to="/" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Home</Link></li>
               <li><Link to="/services" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Services</Link></li>
               <li><Link to="/case-studies" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Case Studies</Link></li>
               <li><Link to="/resources" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Resources</Link></li>
               <li><Link to="/about" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">About</Link></li>
               <li><Link to="/contact" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Contact</Link></li>
             </ul>
           </div>

           <div>
             <h3 className="font-bold text-lg mb-4">Services</h3>
             <ul className="space-y-2 text-gray-600">
               <li><Link to="/services/shopify-development" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Shopify Development</Link></li>
               <li><Link to="/services/growth-marketing" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">Growth Marketing</Link></li>
               <li><Link to="/services/ui-ux-design" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">UI/UX Design</Link></li>
             </ul>
           </div>

           <div>
             <h3 className="font-bold text-lg mb-4">Contact</h3>
             <ul className="space-y-2 text-gray-600">
               <li><a href="mailto:connect@pixelpopdigi.com" className="text-base hover:text-[#5A99FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1">connect@pixelpopdigi.com</a></li>
               <li className="pt-2">
                 <a href="https://www.linkedin.com/company/pixelpop-digi" target="_blank" rel="noopener noreferrer" className="inline-block glass-card rounded-full p-3 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2">
                   <svg className="w-6 h-6 text-[#5A99FC]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                   </svg>
                 </a>
               </li>
             </ul>
           </div>
       </div>
         <div className="pt-6 border-t border-gray-200/50">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-gray-500 text-sm">
               &copy; {new Date().getFullYear()} PixelPop Digi. All rights reserved.
             </div>
             <div className="flex gap-6 text-sm text-gray-500">
               <Link to="/privacy-policy" className="hover:text-[#5A99FC] transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-[#5A99FC] transition-colors">Terms & Conditions</Link>
             </div>
           </div>
         </div>
       </div>
    </footer>
  );
};

export default Footer;