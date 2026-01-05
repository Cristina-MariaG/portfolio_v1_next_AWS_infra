'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/locales/client';

export default function Footer({ timerValue }: { timerValue: number }) {
  const [visible, setVisible] = useState(false);
  const t = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, timerValue);
    return () => clearTimeout(timer);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      className={`flex sm:text-base text-sm transform transition-all duration-700 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
      }`}
    >
      <div className='w-[40%] flex items-center justify-center cursor-pointer hover-bounce' onClick={() => scrollToSection('aboutMe')}>
        <p className='ps-4 flex items-center gap-2 flash'>
          {t('scrollDown')} <FontAwesomeIcon icon={faArrowDown} className='fa-2xl fa-solid' />
        </p>
      </div>
      <div className='w-[60%] footer flex sm:flex-row flex-col items-center justify-end cursor-pointer'>
        <p className='sm:pr-10 hover-bounce' onClick={() => scrollToSection('aboutMe')}>
          {t('aboutMe')}
        </p>
        <p className='sm:pr-10 hover-bounce' onClick={() => scrollToSection('portfolio.title')}>
          {t('portfolio.title')}
        </p>
        <p className='sm:pr-10 hover-bounce' onClick={() => scrollToSection('contact')}>
          {t('contact')}
        </p>
      </div>
    </div>
  );
}
