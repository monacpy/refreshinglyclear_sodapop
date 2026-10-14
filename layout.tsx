import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soda Premium',
  description: 'Modern premium soda landing page built with Next.js, React, GSAP, Lenis and 3D visuals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
