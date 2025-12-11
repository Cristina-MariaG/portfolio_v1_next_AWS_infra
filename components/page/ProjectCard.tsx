import React from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies?: string[];
  imageSrc?: string;
  imageAlt?: string;
  demoUrl?: string;
  repoUrl?: string;
  year?: string | number;
  role?: string;
  /** visual variant: 'light' (default), 'dark' (black card), or 'blank' (transparent/minimal) */
  variant?: 'light' | 'dark' | 'blank';
  /** image on 'left' (default) or 'right' */
  alignImage?: 'left' | 'right';
  alignProjectCard?: 'left' | 'right';
};

export default function ProjectCard({
  title,
  description,
  technologies = [],
  imageSrc,
  imageAlt,
  demoUrl,
  repoUrl,
  year,
  role,
  variant = 'light',
  alignImage = 'left',
  alignProjectCard = 'left',
}: ProjectCardProps) {
  const isDark = variant === 'dark';
  const isBlank = variant === 'blank';

  const containerBase = 'w-full max-w-3xl rounded-xl overflow-hidden backdrop-blur-sm shadow-sm';
  const containerVariant = isBlank
    ? 'bg-transparent border-0'
    : isDark
    ? 'border border-neutral-800 bg-neutral-900'
    : 'border border-gray-200 bg-white/80 dark:bg-neutral-900/60';

  const textColor = isBlank ? 'text-neutral-900 dark:text-neutral-100' : isDark ? 'text-white' : 'text-neutral-900 dark:text-neutral-100';

  const flexDirection = alignImage === 'right' ? 'md:flex md:flex-row-reverse' : 'md:flex';
  const alignProject = alignProjectCard === 'right' ? '' : '';
  return (
    <article className={`${containerBase} ${containerVariant} ${alignProject} `}>
      <div className={flexDirection}>
        <div
          className={`relative w-full h-48 md:h-auto md:w-48 flex-shrink-0 ${
            isDark ? 'bg-gradient-to-br from-neutral-800 to-neutral-900' : 'bg-gradient-to-br from-slate-100 to-slate-50'
          }`}
        >
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt ?? title} fill sizes='(max-width: 768px) 100vw, 192px' className='object-cover' />
          ) : (
            <div className='flex items-center justify-center h-full px-4'>
              <span className='text-sm text-neutral-500 dark:text-neutral-400'>No image</span>
            </div>
          )}
        </div>

        <div className={`p-4 md:p-6 flex-1 ${textColor}`}>
          <header className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
            <div>
              <h3 className='text-lg font-semibold leading-snug text-neutral-900 dark:text-neutral-100'>{title}</h3>
              <div className='text-xs text-neutral-500 dark:text-neutral-400 mt-1'>
                {role && <span className='mr-2'>{role}</span>}
                {year && <span className=''>• {year}</span>}
              </div>
            </div>

            <div className='flex gap-2 items-center'>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300 hover:opacity-90'
                >
                  Live
                </a>
              )}

              {repoUrl && (
                <a
                  href={repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:opacity-90'
                >
                  Code
                </a>
              )}
            </div>
          </header>

          <p className='mt-3 text-sm'>{description}</p>

          {technologies.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-2'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2 py-1 rounded-md ${
                    isDark ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <footer className={`mt-4 text-xs ${isDark ? 'text-neutral-300' : 'text-neutral-500 dark:text-neutral-400'}`}>
            - A clean, accessible snapshot to show on a portfolio: short description, tech stack, and quick links to live/demo and source.
          </footer>
        </div>
      </div>
    </article>
  );
}
