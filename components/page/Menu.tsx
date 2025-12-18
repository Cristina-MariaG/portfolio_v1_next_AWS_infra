'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { useState } from 'react';
import Modal from './Modal';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();

  const handleClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // ferme la modale
    }
  };
  const menuItems = ['portfolio.title', 'aboutMe', 'contact'];
  return (
    <>
      <div className='transition-transform duration-300 hover:scale-110 cursor-pointer' title='Click' onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} className='fa-fw fa-xl' />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {menuItems.map((key) => (
          <MenuItem translationKey={key} onClick={() => handleClick(key)} key={key} />
        ))}{' '}
      </Modal>
    </>
  );
}
