import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-neutral-100'>
      <body
        className={
          inter.className +
          ' mx-auto w-[21cm] h-[29.7cm] grid grid-cols-[7cm_1fr] grid-rows-1 bg-slate-50'
        }
      >
        {children}
      </body>
    </html>
  );
}
