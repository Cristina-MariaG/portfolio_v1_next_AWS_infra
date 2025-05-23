'use client';

import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';

export default function LanguageSelector() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className='relative inline-block'>
      <select
        value={locale}
        onChange={(e) => {
          changeLocale((e.target.value as 'fr') || 'en' || 'ro');
        }}
        className='appearance-none bg-white dark:bg-neutral-900 text-black dark:text-white border border-gray-300 dark:border-neutral-700 px-4 py-2 pr-8 rounded-full shadow-md font-medium text-sm sm:text-base transition focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20'
      >
        <option value='fr'>🇫🇷 {t('hello')}</option>
        {/* <option value='en'>🇬🇧 {t('english')}</option>
        <option value='ro'>Ro {t('romanian')}</option> */}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400'>
        <svg className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
          <path d='M7 7l3 3 3-3m0 6l-3-3-3 3' />
        </svg>
      </div>
    </div>
  );
}
