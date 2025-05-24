'use client';

import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';

export default function Initials() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div>
      <p className='relative group p-8 min-w-[200px] min-h-[60px] text-xl font-semibold cursor-pointer overflow-hidden'>
        {/* Nom complet qui glisse depuis le haut */}
        <span className='absolute top-8 left-8 transition-all duration-500 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-2xl tracking-wide'>
          Cristina Ghinda
        </span>

        {/* Initiales visibles par défaut */}
        <span className='block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0'>C–G</span>
      </p>
    </div>
  );
}
