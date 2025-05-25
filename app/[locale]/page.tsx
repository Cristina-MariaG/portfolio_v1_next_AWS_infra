import LandingPage from '@/components/page/LandingPage';
import PortfolioPage from '@/components/page/PortfolioPage';
import AboutMe from '@/components/page/AboutMe';
export default async function Home() {
  return (
    <main>
      <LandingPage />
      <PortfolioPage />
      <AboutMe />
    </main>
  );
}
