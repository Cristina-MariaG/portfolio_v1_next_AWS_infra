'use client';
import { useI18n } from '@/locales/client';
import ProjectCard from './ProjectCard';

export default function PortfolioPage() {
  const t = useI18n();

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <ProjectCard
        imageSrc='/ecodb_home.png'
        title={t('ecodb.title')}
        subtitle={t('ecodb.subtitle')}
        description={[
          t('ecodb.description0'),
          t('ecodb.description1'),
          t('ecodb.description2'),
          t('ecodb.description3'),
          t('ecodb.description4'),
          t('ecodb.description5'),
        ]}
        technologies={['Vue', 'Django', 'Git', 'Vuetify', 'Javascript']}
        variant='light'
        year='2021-2024'
      />
      <ProjectCard
        title={t('jam.title')}
        subtitle={t('jam.subtitle')}
        description={[
          t('jam.description0'),
          t('jam.description1'),
          t('jam.description2'),
          t('jam.description3'),
          t('jam.description4'),
          t('jam.description5'),
        ]}
        technologies={[
          'Django',
          'Vue.js',
          'Vuetify',
          'Typescript',
          'Git',
          'Docker',
          'Docker Compose',
          'MySQL',
          'JWT (SimpleJWT)',
          'Stripe',
          'Vitest',
        ]}
        imageSrc='/jam.png'
        variant='dark'
        year='2023'
      />

      <ProjectCard
        imageSrc='/react_nativ.png'
        title={t('sell.title')}
        subtitle={t('sell.subtitle')}
        description={[
          t('sell.description0'),
          t('sell.description1'),
          t('sell.description2'),
          t('sell.description3'),
          t('sell.description4'),
          t('sell.description5'),
        ]}
        variant='light'
        mobile={true}
        technologies={['React Native', 'Node.js', 'Sequelize', 'MySQL', 'JMerise', 'Figma', 'Visual Paradigm']}
        year='2022'
      />
      <ProjectCard
        imageSrc='/devops.png'
        title={t('devOps.title')}
        subtitle={t('devOps.subtitle')}
        description={[
          t('devOps.description0'),
          t('devOps.description1'),
          t('devOps.description2'),
          t('devOps.description3'),
          t('devOps.description4'),
          t('devOps.description5'),
        ]}
        technologies={[
          'Docker',
          'Docker Compose',
          'GitLab',
          'GitLab CI/CD',
          'Terraform',
          'Ansible',
          'AWS',
          'Nginx',
          'Certbot',
          'Prometheus',
          'Grafana',
          'Node Exporter',
          'Blackbox Exporter',
          'OVH',
          'SSH',
          'JIRA',
          'Figma',
        ]}
        variant='dark'
        year='2024'
      />
    </div>
  );
}
