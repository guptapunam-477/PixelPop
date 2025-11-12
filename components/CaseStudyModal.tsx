import React, { useEffect, useRef } from 'react';

// FIX: Export the CaseStudy type to be used in other components.
export type CaseStudy = {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    stats: { value: string; label: string }[];
    chart: React.ReactNode;
    description: string;
    link: string;
    linkText: string;
    imageFirst: boolean;
    actionType: 'modal' | 'link';
};

interface CaseStudyModalProps {
  caseData: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseData, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isVisible = !!caseData;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isVisible) {
      document.body.classList.add('body-no-scroll');
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    
    return () => {
      document.body.classList.remove('body-no-scroll');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isVisible, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
    }
  };

  if (!caseData) return null;

  return (
    <div className={`modal-overlay ${isVisible ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div ref={modalRef} className='modal-content'>
        <div className='relative'>
          <img src={caseData.imageUrl} alt={`${caseData.title} Case Study`} className='w-full h-48 sm:h-64 object-cover' />
          <button onClick={onClose} className='absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white' aria-label="Close case study">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className='p-6 sm:p-8'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-1 text-gray-900'>{caseData.title}</h2>
          <p className='text-gray-600 mb-6'>{caseData.subtitle}</p>

          <h3 className='text-lg sm:text-xl font-bold mb-4 text-[#1a202c]'>Key Results</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6'>
                {caseData.stats.map(stat => (
                    <div key={stat.label} className='text-center p-3 sm:p-4 bg-white/50 rounded-xl shadow-sm'>
                        <div className='text-2xl sm:text-3xl font-black gradient-text'>{stat.value}</div>
                        <div className='text-xs sm:text-sm text-gray-600 mt-1'>{stat.label}</div>
                    </div>
                ))}
          </div>
          
          <h3 className='text-lg sm:text-xl font-bold mb-4 text-[#1a202c]'>Performance Impact</h3>
          <div className='relative w-full h-56 sm:h-64 mb-6'>{caseData.chart}</div>
          
          <h3 className='text-lg sm:text-xl font-bold mb-4 text-[#1a202c]'>Project Overview</h3>
          <p className='text-base text-gray-700 mb-6 leading-relaxed'>{caseData.description}</p>

          <a href={caseData.link} target="_blank" rel="noopener noreferrer" className='btn-primary inline-block'>
            {caseData.actionType === 'modal' ? 'Visit Website' : 'Book a Call'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;