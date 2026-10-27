import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.openmissionofhope.org'),
  title: 'Open Mission of Hope',
  description: 'Prayer, knowledge, and transparent mercy.',
  openGraph: {
    title: 'Open Mission of Hope',
    description: 'Prayer, knowledge, and transparent mercy.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'The Open Mission of Hope penguin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Mission of Hope',
    description: 'Prayer, knowledge, and transparent mercy.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
