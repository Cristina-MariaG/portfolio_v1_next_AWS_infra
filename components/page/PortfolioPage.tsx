'use client';

import { useI18n } from '@/locales/client';
import ProjectCard from './ProjectCard';
export default function PortfolioPage() {
  const t = useI18n();

  return (
    <div id='portfolio' className=' min-h-screen flex text-white bg-home dark:bg-black pt-3 mt-3 md:flex-row'>
      <div className='flex w-[35%]'>
        <div className='pt-5 ps-5 flex justify-center'>
          <p className='text-4xl font-bold  text-black dark:text-white'>Portfolio</p>
        </div>
        <div className=' w-[65%] flex justify-start items-center'>
          <div className='w-[80%] '>
            <p className='text-lg leading-relaxed text-black dark:text-white'>
              Au fil du temps, j’ai conçu plusieurs projets, aussi bien en contexte académique que professionnel.
              <br />
              Vous trouverez ici une sélection de projets concrets, accompagnés des technologies que j’ai utilisées.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {/* <div> */}
        <ProjectCard
          imageSrc='/ecodb_home.png'
          title={t('ecodb.title')}
          description={t('ecodb.description')}
          technologies={['vue', 'django', 'git']}
          variant='blank'
          alignImage='left'
        />
        <ProjectCard
          title='My Weather App'
          description='A responsive weather app showing current conditions and a 7-day forecast. Includes location search, unit toggle and simple caching for faster loads.'
          technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API']}
          // imageSrc='/projects/weather-screenshot.png'
          // imageAlt='Weather app screenshot'
          // demoUrl='https://example.com/weather'
          // repoUrl='https://github.com/yourusername/weather-app'
          year={2024}
          role='Lead developer'
          variant='dark'
          alignImage='right'
        />
        {/* 
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
        /> */}
      </div>
    </div>
  );
}
