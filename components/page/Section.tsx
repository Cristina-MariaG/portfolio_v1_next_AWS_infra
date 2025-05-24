'use client';

import { useEffect, useState } from 'react';

export default function Section({ timerValue }: { timerValue: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, timerValue);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex py-15  transform transition-all duration-700 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
      }`}
    >
      {/* Div vide à gauche qui prend 20% */}
      <div className='w-[20%]'></div>

      {/* Div contenant les titres, largeur 60% */}
      <div className='w-[50%] flex flex-col items-center text-center'>
        <div style={{ color: '#0F0E0E' }}>
          <h1 className='text-5xl md:text-6xl font-extrabold mb-6'>Cristina Ghinda</h1>
          <h1 className='text-4xl md:text-5xl font-bold mb-5'>FullStack Developer</h1>
          <h1 className='text-3xl md:text-4xl font-bold mb-5'>&</h1>
          <h1 className='text-4xl md:text-5xl font-bold mb-8'>DevOps Engineer</h1>
        </div>
      </div>
      <div className='w-[30%]'></div>
    </div>
  );
}
