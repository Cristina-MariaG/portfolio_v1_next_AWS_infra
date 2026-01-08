'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LanguageSelector() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className='pt-2 transition-transform duration-300 hover:scale-110 w-20'>
      <div
        className={`inline-flex items-center gap-2 border dark:border-neutral-700 rounded-full px-3 py-1 bg-white dark:bg-neutral-900 shadow-md text-sm`}
        title='Change language'
      >
        <FontAwesomeIcon icon={faEarthAmerica} className='text-black dark:text-white text-m' />
        <select
          value={locale}
          onChange={(e) => changeLocale((e.target.value as 'fr') || 'en' || 'ro')}
          className='bg-transparent text-black dark:text-white border-none outline-none font-medium text-sm'
        >
          <option value='fr'>🇫🇷 Fr</option>
          <option value='en'>🇬🇧 En</option>
          <option value='ro'>🇷🇴 Ro</option>
        </select>
      </div>
    </div>
  );
}
