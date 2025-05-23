import LanguageSelector from '@/components/LanguageSelector';
import { getI18n } from '../../locales/server';
import ThemeToggle from '@/components/ThemeToogle';

export default async function Home() {
  const t = await getI18n();

  return (
    <div className='relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground'>
      <div className='absolute top-8 right-8'>
        <LanguageSelector />
      </div>

      <main className='flex flex-col items-center justify-center text-center gap-[15px] py-20 sm:py-50'>
        <h1 className='font-bold text-2xl sm:text-3xl'>{t('hello')}</h1>
        <p>hey there! I am cristina ghinda, a web developer from roumanie. gfgff</p>
        <ThemeToggle />
      </main>
    </div>
  );
}
