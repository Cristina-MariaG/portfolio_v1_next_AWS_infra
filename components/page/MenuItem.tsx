import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/locales/client';

type MenuItemProps = {
  translationKey: string;
  onClick: () => void;
};

export default function MenuItem({ translationKey, onClick }: MenuItemProps) {
  const t = useI18n();

  return (
    <p onClick={onClick} className='w-full border-b border-white cursor-pointer'>
      <span className='block mx-4 pr-6 pt-10 group relative inline-flex items-center text-5xl overflow-hidden'>
        <span className='mr-2 inline-block transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300'>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        {/*  @ts-ignore */}
        <span className='inline-block transform group-hover:translate-x-2 transition-all duration-300'>{t(`${translationKey}`)}</span>
      </span>
    </p>
  );
}
