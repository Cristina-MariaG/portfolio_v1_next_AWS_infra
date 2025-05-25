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
      className={`flex  items-center justify-center h-full  transform transition-all duration-700 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
      }`}
    >
      <div className='w-[20%]'></div>

      <div className='w-[50%] flex flex-col items-center justify-center text-center'>
        <div className='text-[#0F0E0E] dark:text-white'>
          <h1 className='text-6xl md:text-7xl font-extrabold mb-6 hover-bounce'>Cristina Ghinda</h1>
          <h1 className='text-4xl md:text-5xl font-bold mb-5 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:drop-shadow-lg'>
            FullStack Developer
          </h1>
          <h1 className='text-3xl md:text-4xl font-bold mb-5 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:drop-shadow-lg'>
            &
          </h1>
          <h1 className='text-4xl md:text-5xl font-bold mb-8 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:drop-shadow-lg'>
            DevOps Engineer
          </h1>
        </div>
      </div>
      <div className='w-[30%] h-24 relative flex justify-center items-center'>
        <div className='circle-container'>
          <div className='move-circle'>
            <div className='ball' />
          </div>
        </div>
      </div>
    </div>
  );
}
