'use client';

import { useI18n } from '@/locales/client';
import ProjectCard from './ProjectCard';

export default function PortfolioPage() {
  const t = useI18n();

  return (
    <div id='portfolio' style={{ backgroundColor: 'var(--background-black)' }} className='text-white'>
      <div className='flex'>
        <div className='w-[35%] pt-5 ps-5 flex justify-center'>
          <p className='text-3xl font-bold '>Portfolio</p>
        </div>
        <div className=' w-[65%] flex justify-start items-center'>
          <div className='w-[40%] '>
            <p className='text-lg leading-relaxed text-white dark:text-gray-300'>
              Au fil du temps, j’ai conçu plusieurs projets, aussi bien en contexte académique que professionnel.
              <br />
              Vous trouverez ici une sélection de projets concrets, accompagnés des technologies que j’ai utilisées.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <ProjectCard
          imageSrc='/ecodb_home.png'
          title={t('ecodb.title')}
          description={t('ecodb.description')}
          techLogos={['vue', 'django', 'git']}
          mobileApp={false}
        />

        <ProjectCard
          imageSrc='/jam_home.png'
          title={t('ecodb.title')}
          description={t('ecodb.description')}
          techLogos={['vue', 'django', 'git']}
          mobileApp={false}
        />

        <ProjectCard
          imageSrc='/sellwhatyoudontneed.png'
          title={t('ecodb.title')}
          description={t('ecodb.description')}
          techLogos={['vue', 'django', 'git']}
          mobileApp={true}
        />
        <ProjectCard
          imageSrc='/sellwhatyoudontneed.png'
          title={t('ecodb.title')}
          description={t('ecodb.description')}
          techLogos={['vue', 'django', 'git']}
          mobileApp={true}
        />
      </div>
    </div>
  );
}
