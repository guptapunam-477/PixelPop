
import React, { useState, useRef, FormEvent } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Contact: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    
    const [formData, setFormData] = useState({
        Name: '', Email: '', 'Company Name': '', 'Phone Number': '', 'Services Required': '', Message: ''
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
        Object.entries(formData).forEach(([key, value]) => {
            formPayload.append(key, value);
        });

        fetch('https://script.google.com/macros/s/AKfycbxa5ZIrbYZO5kSGZT4LJeSuzr5Qo3CjVUon5JzHrrsHibOIFD8d0BIfgkAEbxpfHbIWUw/exec', {
            method: 'POST',
            body: formPayload
        })
        .then(response => {
            if (response.ok) {
                setStatus({ type: 'success', message: "Thank you! Your message has been sent. We'll get back to you soon."});
                setFormData({ Name: '', Email: '', 'Company Name': '', 'Phone Number': '', 'Services Required': '', Message: '' });
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Ready to transform your digital presence? Get in touch and let's create something amazing together.
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
              <label htmlFor='services-required' className='block text-sm font-semibold mb-2 text-gray-700'>Service Needed</label>
              <select id='services-required' name='Services Required' required className='form-input w-full' value={formData['Services Required']} onChange={handleInputChange}>
                 <option value="" disabled>Select a service...</option>
                 <optgroup label="Design">
                     <option>Website Design</option> <option>Mobile App Design</option> <option>UI/UX Design & Audit</option>
                 </optgroup>
                 <optgroup label="Technology">
                     <option>Web Development</option> <option>Mobile Apps Development</option> <option>Web Apps Development</option>
                 </optgroup>
                 <optgroup label="Digital Marketing">
                     <option>Performance Marketing</option> <option>SEO Optimization</option> <option>Growth Strategy</option>
                 </optgroup>
             </select>
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-semibold mb-2 text-gray-700'>Message</label>
              <textarea id='message' name='Message' rows={5} className='form-input w-full' placeholder='Tell us about your project...' value={formData.Message} onChange={handleInputChange}></textarea>
            </div>
            <button type='submit' className='btn-primary w-full md:w-auto md:mx-auto px-12 py-4 text-lg' disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
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
