'use client';

import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';

export default function ThemeToggle(): JSX.Element {
  const [dark, setDark] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Change in Light Mode');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
      setTitle('Change in Dark Mode');
    }
  }, []);

  const toggleTheme = (): void => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  };

  return (
    <div onClick={toggleTheme} className={`rounded cursor-pointer text-white dark:text-black w-20 h-20`}>
      <div className='transition-transform duration-300 hover:scale-110 ps-2 pt-2' title={title}>
        {dark ? (
          <Image src='/light.svg' alt='Light Mode' width={60} height={60} />
        ) : (
          <Image src='/night.svg' alt='Dark Mode' width={60} height={60} />
        )}
      </div>
    </div>
  );
}
