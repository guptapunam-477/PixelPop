
import React, {useRef} from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const StarRating: React.FC = () => (
    <div className='flex items-center gap-1 mb-4 text-yellow-400'>
        {[...Array(5)].map((_, i) => (
            <svg key={i} className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
        ))}
    </div>
);

const TestimonialCard: React.FC<{quote: string; name: string; title: string; initials: string; gradient: string;}> = ({ quote, name, title, initials, gradient}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, 0.2);

    return (
        <div ref={ref} className={`glass-card rounded-3xl p-6 md:p-8 reveal ${isVisible ? 'active' : ''}`}>
            <StarRating />
            <p className='text-base text-gray-700 mb-6 italic leading-relaxed'>"{quote}"</p>
            <div className='flex items-center gap-3'>
                <div className={`w-12 h-12 rounded-full ${gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {initials}
                </div>
                <div>
                    <p className='font-bold text-base'>{name}</p>
                    <p className='text-sm text-gray-600'>{title}</p>
                </div>
            </div>
        </div>
    );
}

const Testimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const testimonialsData = [
    {
      quote: "PixelPop Digi transformed our industrial supplier website with exceptional SEO work. Our organic traffic increased by 148% and qualified leads doubled. Their technical expertise and strategic approach exceeded our expectations.",
      name: "Saumya Nayak",
      title: "Marketing Director, Hicom India",
      initials: "SN",
      gradient: "bg-gradient-to-br from-[#5A99FC] to-[#3CC61A]"
    },
    {
      quote: "Outstanding performance marketing results! Our ROAS improved from 1.0x to 4.5x, and sales tripled within 8 weeks. PixelPop Digi's data-driven approach and creative testing methodology transformed our D2C business.",
      name: "Ishan Sharma",
      title: "CEO, TheBTclub",
      initials: "IS",
      gradient: "bg-gradient-to-br from-[#3CC61A] to-[#5A99FC]"
    },
    {
      quote: "PixelPop Digi helped us achieve 100% of our admissions target through their innovative lead optimization strategies. The WhatsApp automation and targeted campaigns significantly improved our lead quality and footfall.",
      name: "Ms. Shalini Dixit",
      title: "CEO, HiKalpaa",
      initials: "SD",
      gradient: "bg-gradient-to-br from-[#8B5CF6] to-[#5A99FC]"
    },
  ];

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            What our clients say about working with us
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {testimonialsData.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
