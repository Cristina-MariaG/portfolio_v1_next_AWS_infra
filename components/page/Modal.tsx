'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Initials from './Initials';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 bg-black  z-50 flex flex-col'>
      <div className='flex justify-between p-4'>
        <Initials modalOn={true} />
        <button onClick={onClose} className='text-white text-3xl hover:text-gray-300'>
          ✕
        </button>
      </div>
      <div className='text-white px-4'>{children}</div>
    </div>,
    document.getElementById('modal-root')!
  );
}
