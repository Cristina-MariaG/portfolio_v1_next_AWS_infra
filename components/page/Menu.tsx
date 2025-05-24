'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';

export default function Menu() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className='transition-transform duration-300 ease-in-out hover:scale-120 cursor-pointer relative' title='Click'>
      <FontAwesomeIcon icon={faBars} className='fa-fw fa-xl' />
    </div>
  );
}
