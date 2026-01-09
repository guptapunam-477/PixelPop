
import React, { useState, useRef, FormEvent } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Contact: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    
    const [formData, setFormData] = useState({
        Timestamp: '', Name: '', 'Company Name': '', Email: '', 'Phone Number': '', 'Services Required': ''
    });
    const [status, setStatus] = useState<{type: 'success' | 'error' | '', message: string}>({type: '', message: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!formData.Name || !formData.Email || !formData['Services Required']) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.'});
            return;
        }
        setIsSubmitting(true);
        setStatus({ type: '', message: ''});

        const formPayload = new FormData();
        formPayload.append('Timestamp', new Date().toISOString());
        Object.entries(formData).forEach(([key, value]) => {
            if (key !== 'Timestamp') {
                formPayload.append(key, value);
            }
        });

        fetch('https://script.google.com/macros/s/AKfycbxa5ZIrbYZO5kSGZT4LJeSuzr5Qo3CjVUon5JzHrrsHibOIFD8d0BIfgkAEbxpfHbIWUw/exec', {
            method: 'POST',
            body: formPayload
        })
        .then(response => {
            if (response.ok) {
                setStatus({ type: 'success', message: "Thank you! Your inquiry has been submitted. We'll get back to you within 1-2 business days."});
                setFormData({ Timestamp: '', Name: '', 'Company Name': '', Email: '', 'Phone Number': '', 'Services Required': '' });
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.'});
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

  return (
    <section id='contact' className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Let's Talk About Your <span className="gradient-text">D2C Growth</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Tell us about your business, goals, and challenges. We'll respond with clarity on how we can help — or honestly tell you if we're not the right fit.
          </p>
        </div>
        <div className={`glass-card rounded-3xl p-8 md:p-12 reveal ${isVisible ? 'active' : ''}`}>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6' noValidate>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-semibold mb-2 text-gray-700'>Name</label>
                <input id='name' name='Name' type='text' required className='form-input w-full' placeholder='Your name' value={formData.Name} onChange={handleInputChange}/>
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-semibold mb-2 text-gray-700'>Email</label>
                <input id='email' name='Email' type='email' required className='form-input w-full' placeholder='your@email.com' value={formData.Email} onChange={handleInputChange} />
              </div>
            </div>
            <div>
              <label htmlFor='services-required' className='block text-sm font-semibold mb-2 text-gray-700'>Services Required</label>
              <select id='services-required' name='Services Required' required className='form-input w-full' value={formData['Services Required']} onChange={handleInputChange}>
                 <option value="" disabled>Select a service...</option>
                 <option>Shopify Development</option>
                 <option>Growth Marketing</option>
                 <option>UI/UX Design</option>
                 <option>Combination</option>
             </select>
            </div>
            <div>
              <label htmlFor='company-name' className='block text-sm font-semibold mb-2 text-gray-700'>Company Name</label>
              <input id='company-name' name='Company Name' type='text' className='form-input w-full' placeholder='Your company name' value={formData['Company Name']} onChange={handleInputChange}/>
            </div>
            <div>
              <label htmlFor='phone' className='block text-sm font-semibold mb-2 text-gray-700'>Phone Number</label>
              <input id='phone' name='Phone Number' type='tel' className='form-input w-full' placeholder='Your phone number' value={formData['Phone Number']} onChange={handleInputChange} />
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button type='submit' className='btn-primary px-12 py-4 text-lg' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
              <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" className='btn-secondary text-center px-12 py-4 text-lg'>
                Book a Free Strategy Call
              </a>
            </div>
          </form>
          {status.message && (
            <div className={`mt-6 p-4 rounded-lg text-center ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
