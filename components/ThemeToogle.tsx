'use client';

import { JSX, useEffect, useState } from 'react';

export default function ThemeToggle(): JSX.Element {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = (): void => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className='px-4 py-2 rounded transition bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-300 dark:text-black dark:hover:bg-yellow-400'
    >
      {dark ? '☀️ Mode clair' : '🌙 Mode sombre'}
    </button>
  );
}
