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
  metadataBase: new URL('https://www.amazinktatto.com'),
  title: {
    default: "Amazink Tattoo | Best Tattoo Studio in Calicut",
    template: "%s | Amazink Tattoo Calicut"
  },
  description: "Welcome to Amazink Tattoo, the leading custom tattoo studio in Calicut and Kozhikode, Kerala. Trusted for bespoke tattoo designs, realism, fine line art, and exceptional hygiene standards.",
  keywords: [
    "Tattoo Studio Calicut",
    "Best Tattoo Studio Calicut",
    "Tattoo Shop Calicut",
    "Tattoo Studio Kozhikode",
    "Premium Tattoo Studio Calicut",
    "Hygienic Tattoo Studio Calicut"
  ],
  openGraph: {
    title: 'Amazink Tattoo | Best Tattoo Studio in Calicut',
    description: 'The leading custom tattoo studio in Calicut and Kozhikode, Kerala. Specialized in custom design, realism, fine line art, and top-tier sterilization practices.',
    url: 'https://www.amazinktatto.com',
    siteName: 'Amazink Tattoo',
    images: [
      {
        url: '/hero-portrait.png',
        width: 1200,
        height: 800,
        alt: 'Amazink Tattoo Calicut',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazink Tattoo | Best Tattoo Studio in Calicut',
    description: 'The leading custom tattoo studio in Calicut and Kozhikode, Kerala. Specialized in custom design, realism, fine line art, and top-tier sterilization practices.',
    images: ['/hero-portrait.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  }
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
