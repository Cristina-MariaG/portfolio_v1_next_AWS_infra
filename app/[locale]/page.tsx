import LandingPage from '@/components/page/LandingPage';
import PortfolioPage from '@/components/page/PortfolioPage';
import AboutMe from '@/components/page/AboutMe';
import Contact from '@/components/page/Contact';

export default async function Home() {
  return (
    <main>
      <LandingPage />
      <AboutMe />
      <PortfolioPage />
      <Contact />
    </main>
  );
}
