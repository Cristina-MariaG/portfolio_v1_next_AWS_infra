'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';

export default function AboutMe() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div id='aboutMe' className='h-screen flex items-center justify-center' style={{ backgroundColor: 'var(--background-black)' }}>
      <FontAwesomeIcon icon={faBars} className='fa-fw fa-xl' />
      <p>About me</p>{' '}
    </div>
  );
}
