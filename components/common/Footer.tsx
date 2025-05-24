'use client';

import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Footer({ timerValue }: { timerValue: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, timerValue);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex transform transition-all duration-700 ease-in-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
      <div className={`w-[20%] grid justify-items-center flash`}>
        <FontAwesomeIcon icon={faArrowDown} className='fa-2xl fa-solid' />
      </div>
      <div className='w-[20%] justify-center'>
        <p>
          Scroll down <FontAwesomeIcon icon={faArrowDown} className='fa-xl' />{' '}
        </p>
      </div>
      <div className='w-[60%]'>
        <p>Portfolio</p>
      </div>
    </div>
  );
}
