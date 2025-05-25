'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { useState } from 'react';
import Modal from './Modal';
import Header from '../common/Header';
import Initials from './Initials';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <>
      <div className='transition-transform duration-300 hover:scale-110 cursor-pointer' title='Click' onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} className='fa-fw fa-xl' />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className='text-3xl font-bold mb-4'>Menu</h2>
        <p>Contenu de la modale ici</p>
      </Modal>
    </>
  );
}
