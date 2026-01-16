import React from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string[];
  technologies?: string[];
  imageSrc?: string;
  imageAlt?: string;
  year?: string;
  /** visual variant: 'light' (default), 'dark' (black card), or 'blank' (transparent/minimal) */
  variant?: 'light' | 'dark';
  /** image on 'left' (default) or 'right' */
  alignProjectCard?: 'left' | 'right';
  mobile?: true | false;
};

export default function ProjectCard({
  title,
  subtitle,
  description = [],
  technologies = [],
  imageSrc,
  imageAlt,
  year,
  variant = 'light',
  alignProjectCard = 'left',
  mobile = false,
}: ProjectCardProps) {
  const isDark = variant === 'dark';
  const isWhite = variant === 'light';

  const containerBase = 'w-full md:max-w-3xl rounded-xl overflow-hidden backdrop-blur-sm shadow-sm';
  const containerVariant = isWhite ? ' border border-2 bg-whiteColor' : 'border border-gray-200 bg-grey';

  const textColor = isWhite ? 'text-neutral-900' : isDark ? 'text-white' : 'text-neutral-900 dark:text-neutral-100';

  const flexDirection = 'md:flex md:flex-col';

  const alignProject = alignProjectCard === 'right' ? '' : '';
  return (
    <article className={`${containerBase} ${containerVariant} ${alignProject}`}>
      <div className={`${flexDirection} items-center`}>
        <div className={`relative mx-auto`}>
          {imageSrc ? (
            mobile ? (
              <Image src={imageSrc} alt={imageAlt ?? title} width={150} height={300} className='object-contain' />
            ) : (
              <Image src={imageSrc} alt={imageAlt ?? title} width={750} height={450} className='  p-3 max-w-full h-auto object-contain' />
            )
          ) : (
            <div className='flex items-center justify-center h-full px-4'>
              <span className='text-sm text-neutral-500 dark:text-neutral-400'>No image</span>
            </div>
          )}
        </div>

        <div className={`p-4 md:p-6 flex-1 text-left ${textColor}`}>
          <header className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
            <div>
              <h3 className='text-lg font-semibold leading-snug'>{title}</h3>
              <h3 className='text-base font-semibold leading-snug'>{subtitle}</h3>
              <div className='text-xs text-neutral-500 dark:text-neutral-400 mt-1'>
                {/* {role && <span className='mr-2'>{role}</span>} */}
                {year && <span className=''>• {year}</span>}
              </div>
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
            </div>

            {/*   <div className='flex gap-2 items-center'>
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
            </div>*/}
          </header>

          {/* <p className='mt-3 text-sm'>{description}</p>
           */}
          <ul className={`p-4 md:p-6 flex-1 text-left ${textColor} list-disc list-inside space-y-1`}>
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* <footer className={`mt-4 text-xs ${isDark ? 'text-neutral-300' : 'text-neutral-500 dark:text-neutral-400'}`}></footer> */}
        </div>
      </div>
    </article>
  );
}
