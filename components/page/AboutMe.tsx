'use client';

import { useI18n } from '@/locales/client';
import Image from 'next/image';

export default function AboutMe() {
  const t = useI18n();

  return (
    <div id='aboutMe' className='min-h-screen flex bg-light dark:bg-grey text-black dark:text-light md:flex-row flex-col mt-5'>
      <div className='md:w-1/4 flex flex-col  items-center'>
        <p className='md:text-2xl text-base font-bold'>{t('aboutMe')}</p>
        <Image src='/cris.png' alt='Portrait' width={300} height={300} className='rounded-full shadow-lg h-auto mt-10' />
      </div>

      <div className='md:w-3/4 flex  flex-col justify-center items-center'>
        <div className='p-4 md:p-0 md:w-3/4 md:text-lg  text-base leading-relaxed text-black dark:text-white '>
          <p>{t('about.paragraph1')}</p>
          <br />
          <p>{t('about.paragraph2')}</p>
          <br />
          <p>{t('about.paragraph3')}</p>
          <br />
          <p>{t('about.paragraph4')}</p>
          <br />
          <p>{t('about.paragraph5')}</p>
          <br />
          <p>{t('about.paragraph6')}</p>
        </div>
      </div>
    </div>
  );
}
