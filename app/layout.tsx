import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/hooks/useLanguage';
import './globals.css';

export const metadata: Metadata = {
  title: 'AL-MANEEF CO. | Quality Sanitary & Plastic Materials',
  description: 'Leading manufacturer of sanitary and plastic materials. Quality products for residential and commercial use.',
  keywords: 'sanitary materials, plastic materials, manufacturing, pipes, fittings, Saudi Arabia',
  authors: [{ name: 'AL-MANEEF CO.' }],
  openGraph: {
    title: 'AL-MANEEF CO. | Quality Sanitary & Plastic Materials',
    description: 'Leading manufacturer of sanitary and plastic materials',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

