'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/locales/client';

const Contact = () => {
  const t = useI18n();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('Submitting contact form:', formData);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log(res);
      const data = await res.json();

      if (res.ok) {
        alert('Merci pour votre message !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div id='contact' className='min-h-screen flex flex-col md:flex-row p-4 md:p-0 '>
      <div className='md:w-1/4 flex items-center justify-center bg-gray-100 bg-light dark:bg-grey'>
        <h1 className='text-[clamp(1.5rem,4vw,2.5rem)] font-bold rotate-0 md:rotate-0'>{t('contactPage.title')}</h1>
      </div>

      <div className='flex flex-col md:justify-center flex-1 gap-5 pt-5 dark:bg-grey'>
        <p className='text-base md:text-lg w-full md:w-3/4 self-center mb-4'>{t('contactPage.sendMessage')}</p>
        <div className='w-full md:w-3/4 p-4 self-center'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Votre nom'
              className='w-full text-lg pb-2 border-b text-black border-gray-300 dark:border-neutral-600 focus:border-blue-500 focus:outline-none'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Votre email'
              className='w-full text-lg pb-2 border-b border-gray-300 dark:border-neutral-600 focus:border-blue-500 focus:outline-none text-black'
              required
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Votre message'
              className='w-full text-lg pb-2 text-black border-b border-gray-300 dark:border-neutral-600 focus:border-blue-500 focus:outline-none'
              required
            />
            <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'>
              {t('contactPage.sendButton')}
            </button>
          </form>
        </div>

        <p className='text-gray-500 self-center'>
          <a
            href='https://www.linkedin.com/in/cristina-maria-1a073b20b/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            {t('contactPage.findMeOn')}
          </a>
        </p>
        <p className='self-center'>
          <a
            href='/CV_Cristina_Ghinda.pdf'
            download
            className='inline-flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition'
          >
            <FontAwesomeIcon icon={faDownload} className='fa-2xl fa-solid' />

            {t('contactPage.dwnloadCV')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
