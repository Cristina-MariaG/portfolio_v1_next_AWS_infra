'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import Image from 'next/image';

export default function AboutMe() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    // <div id='aboutMe' style={{ backgroundColor: 'var(--background-light)' }} className=' flex'>
    <div id='aboutMe' className='min-h-screen bg-light flex dark:bg-grey text-black dark:text-light md:flex-row'>
      <div className='w-[10%] pt-10 ps-5 flex justify-start'>
        <p className='text-4xl font-medium '>Profil</p>
      </div>
      <div className='w-[15%]  flex flex-col justify-center items-center'>
        <p className='text-5xl font-bold'>{t('aboutMe')}</p>
        <Image src='/cris.png' alt='Portrait' width={300} height={300} className='rounded-full shadow-lg h-auto mt-10' />;
      </div>

      <div className='w-[75%] flex flex-col justify-center items-center'>
        <div className='w-[75%]  flex flex-col items-center'>
          <p className='text-lg leading-relaxed'>
            Je suis née et j’ai grandi en Roumanie, où j’ai terminé mes études en Mathematique-Informatique. Durant cette période, j’ai affiné mes
            compétences analytiques et développé un fort intérêt pour la technologie — que ce soit pour automatiser des tâches simples ou créer des
            scripts afin de résoudre des problèmes du quotidien.
            <br />
            <br />
            En 2020, j’ai décidé de m’installer en France pour relever de nouveaux défis et élargir mes horizons. Peu après mon arrivée à Paris, j’ai
            découvert le développement web. La combinaison entre créativité et logique m’a tout de suite fascinée. J’ai donc suivi un bootcamp axé sur
            le JavaScript full-stack, une alternance en tant que developeuse Javascript et une formation d'ingenieur DEvOps.
            <br />
            <br />
            Aujourd’hui, en tant que <strong>développeuse web full-stack et ingénieure DevOps</strong>, je combine le meilleur des deux mondes :
            <br />
            - Côté front-end : je conçois des interfaces responsives et intuitives Next.js eu Vue.js.
            <br />
            - Côté back-end : je construis des APIs RESTful en Node.js, Django et j’automatise les déploiements avec Docker, Kubernetes et Terraform.
            <br />
            <br />
            Mon parcours — de la Roumanie à la France, de mes premières lignes de code au déploiement d’applications prêtes pour la production — m’a
            appris à m’adapter rapidement et à apprendre en continu. Je suis passionnée par la création de solutions élégantes qui donnent vie aux
            idées sur le web.
          </p>
        </div>
      </div>
    </div>
  );
}
