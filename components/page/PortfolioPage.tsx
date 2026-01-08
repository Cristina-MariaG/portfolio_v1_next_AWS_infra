'use client';

import { useI18n } from '@/locales/client';
import Projects from './Projects';
export default function PortfolioPage() {
  const t = useI18n();

  return (
    <div id='portfolio.title' className='bg-home dark:bg-black  p-4 md:p-0 pt-3 mt-5 pb-4'>
      <div className='flex md:flex-row md:gap-10 flex-col min-h-screen  md:items-center md:justify-center md:text-lg  text-base leading-relaxed text-black dark:text-white '>
        <div className='md:w-1/4'>
          <p className='text-center text-xl md:text-4xl font-bold'>{t('portfolio.title')}</p>
        </div>

        <div className='md:w-3/4  text-start'>
          <p className='md:w-3/4'>{t('portfolio.introTitle')}</p>
          <p className='md:w-3/4 mt-4'>{t('portfolio.introDescription0')}</p>
          <p className='md:w-3/4 mt-4'>{t('portfolio.introDescription1')}</p>
          <p className='md:w-3/4 mt-4'>{t('portfolio.introDescription2')}</p>
        </div>
      </div>
      <Projects />
    </div>
  );
}
