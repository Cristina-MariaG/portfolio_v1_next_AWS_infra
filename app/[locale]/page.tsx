import HomePage from '@/components/page/HomePage';
import PortfolioPage from '@/components/page/PortfolioPage';
import AboutMe from '@/components/page/AboutMe';
import Contact from '@/components/page/Contact';

export default async function Home() {
  return (
    <main>
      <HomePage />
      <AboutMe />
      <PortfolioPage />
      <Contact />
    </main>
  );
}
