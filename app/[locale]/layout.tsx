// app/[locale]/layout.tsx

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactElement } from 'react';
import { I18nProviderClient } from '../../locales/client';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>; children: ReactElement }) {
  const { locale } = await params;

  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black
      dark:bg-black dark:text-white`}
      >
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
