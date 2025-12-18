'use client';

import Initials from '@/components/page/Initials';
import Menu from '@/components/page/Menu';
import ThemeToggle from '../page/ThemeToogle';
import LanguageSelector from '../page/LanguageSelector';
import { useEffect, useState } from 'react';

export default function Header({ timerValue }: { timerValue: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, timerValue);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`flex transform transition-all duration-700 ease-in-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
      <div className={`w-[60%] p-5 flex flex-col text-sm`}>
        <LanguageSelector />
        <ThemeToggle />
      </div>
      <div className='w-[40%] '>
        <div className='flex pt-3'>
          <div className='flex-1 '>
            <Initials modalOn={false} />
          </div>
          <div className='flex-1 flex justify-end  p-8'>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
