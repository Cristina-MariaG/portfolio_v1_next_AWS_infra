'use client';

import Header from '@/components/common/Header';
import Section from '@/components/page/Section';
import Footer from '@/components/common/Footer';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen dark:bg-black bg-[#F2F1EA]'>
      <div className='md:h-auto md:flex-none'>
        <Header timerValue={1500} />
      </div>
      <div className='md:overflow-auto md:flex-1'>
        <Section timerValue={2500} />
      </div>
      <div className=' md:h-auto md:flex-none'>
        <Footer timerValue={1500} />
      </div>
    </div>
  );
}
