import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className='space-y-6 p-4'>
      <ProjectCard
        title='My Weather App'
        description='A responsive weather app showing current conditions and a 7-day forecast. Includes location search, unit toggle and simple caching for faster loads.'
        technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API']}
        imageSrc='/projects/weather-screenshot.png'
        imageAlt='Weather app screenshot'
        demoUrl='https://example.com/weather'
        repoUrl='https://github.com/yourusername/weather-app'
        year={2024}
        role='Lead developer'
      />

      <ProjectCard
        title='Portfolio Site'
        description='Personal portfolio built to showcase projects, blog posts and contact info. Focus on performance, accessibility and simple CMS integration.'
        technologies={['React', 'Next.js', 'Vercel', 'SEO']}
        // no imageSrc to demonstrate the fallback UI
        demoUrl='https://example.com'
        repoUrl='https://github.com/yourusername/portfolio'
        year={2025}
        role='Solo project'
      />
    </div>
  );
}
