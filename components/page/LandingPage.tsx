'use client';
import Header from '@/components/common/Header';
import Section from '@/components/page/Section';
import Footer from '@/components/common/Footer';

export default async function LandingPage() {
  return (
    <div className='flex flex-col'>
      <Header timerValue={3500} />
      <Section timerValue={4500} />
      <Footer timerValue={5500} />
    </div>
  );
}
