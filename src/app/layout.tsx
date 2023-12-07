import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Search from './components/search/Search';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job Scraper',
  description: 'Combs the web for jobs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Search />
        {children}
      </body>
    </html>
  );
};
