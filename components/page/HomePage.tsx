'use client';

import Header from '@/components/common/Header';
import Section from '@/components/page/Section';
import Footer from '@/components/common/Footer';

export default function HomePage() {
  return (
    <div className='flex flex-col h-screen overflow-hidden dark:bg-black bg-[#F2F1EA]'>
      <div className='h-[15%]'>
        <Header timerValue={3500} />
      </div>
      <div className='h-[70%] overflow-auto'>
        <Section timerValue={4500} />
      </div>
      <div className='h-[15%]'>
        <Footer timerValue={5500} />
      </div>
    </div>
  );
}
