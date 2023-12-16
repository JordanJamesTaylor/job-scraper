import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';

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
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
};
