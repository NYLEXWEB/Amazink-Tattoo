import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AMAZINK | Luxury Custom Tattoo Studio',
  description: 'An elite custom tattoo studio focused on artistic storytelling, bespoke design, and premium client experiences. Designed for high-income professionals, artists, and luxury consumers.',
  keywords: ['Luxury Tattoo', 'Bespoke Tattoo Studio', 'Fine Line Tattoo', 'Minimalist Tattoo', 'Amazink', 'Custom Tattoo Design', 'Premium Tattoo Experience'],
  openGraph: {
    title: 'AMAZINK | Luxury Custom Tattoo Studio',
    description: 'An elite custom tattoo studio focused on artistic storytelling, bespoke design, and premium client experiences.',
    url: 'https://nylex.online',
    siteName: 'AMAZINK',
    images: [
      {
        url: '/hero-portrait.png',
        width: 1200,
        height: 800,
        alt: 'AMAZINK Luxury Tattoo Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMAZINK | Luxury Custom Tattoo Studio',
    description: 'An elite custom tattoo studio focused on artistic storytelling, bespoke design, and premium client experiences.',
    images: ['/hero-portrait.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-text-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}
