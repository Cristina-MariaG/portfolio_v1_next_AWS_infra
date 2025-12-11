'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // zszjdwkahbtxctws
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
    <div id='contact' className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-1/4 flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
        <h1 className='text-[clamp(1.5rem,4vw,2.5rem)] font-bold rotate-0 md:rotate-0'>Contact</h1>
      </div>

      <div className='flex flex-col justify-center flex-1 gap-5'>
        {/* <div className='md:w-3/4 p-8 flex flex-col justify-center  gap-8 border-black'> */}
        <p className='text-base md:text-lg w-full md:w-3/4 self-center mb-4'>
          Send me a message using the form below :
          {/* 📧 Email :{' '}
          <a href='mailto:tonemail@example.com' className='text-blue-600 hover:underline'>
            tonemail@example.com
          </a> */}
        </p>
        <div className='w-full md:w-3/4 p-4 self-center'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Votre nom'
              className='w-full text-lg pb-2 border-b border-gray-300 dark:border-neutral-600 focus:border-blue-500 focus:outline-none'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Votre email'
              className='w-full text-lg pb-2 border-b border-gray-300 dark:border-neutral-600 focus:border-blue-500 focus:outline-none'
              required
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Votre message'
              className='w-full text-lg pb-2 border-b border-gray-300 dark:border-neutral-600 focus:border-blue-500 focus:outline-none'
              required
            />
            <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'>
              Envoyer
            </button>
          </form>
        </div>

        {/* Autres infos */}
        <p className='text-gray-500 self-center'>
          Vous pouvez également me retrouver sur{' '}
          <a href='https://www.linkedin.com/in/tonprofil' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
            LinkedIn
          </a>
          .
        </p>
        <p className='self-center'>
          <a
            href='/CV_Cristina_Ghinda.pdf'
            download
            className='inline-flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition'
          >
            <FontAwesomeIcon icon={faDownload} className='fa-2xl fa-solid' />
            Download my CV
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
