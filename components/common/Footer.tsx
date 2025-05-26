'use client';

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={`flex transform transition-all duration-700 ease-in-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
      <div className='w-[20%] flex items-center justify-center cursor-pointer flash' onClick={() => scrollToSection('portfolio')}>
        <FontAwesomeIcon icon={faArrowDown} className='fa-2xl fa-solid' />
      </div>

      <div className='w-[20%] flex items-center justify-center cursor-pointer hover-bounce' onClick={() => scrollToSection('portfolio')}>
        <p className='flex items-center gap-2 flash'>
          Scroll down <FontAwesomeIcon icon={faArrowDown} className='fa-2xl fa-solid' />
        </p>
      </div>
      <div className='w-[60%] flex items-center justify-end cursor-pointer'>
        <p className='pr-10 hover-bounce' onClick={() => scrollToSection('portfolio')}>
          Portfolio
        </p>
        <p className='pr-10 hover-bounce' onClick={() => scrollToSection('aboutMe')}>
          About Me
        </p>
      </div>
    </div>
  );
}
