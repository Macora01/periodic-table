import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tabla Periódica Interactiva',
  description: 'Explora los 118 elementos químicos con datos detallados: historia, usos, propiedades y curiosidades.',
  keywords: ['tabla periódica', 'elementos químicos', 'química', 'educación', 'ciencia'],
  authors: [{ name: 'FACore' }],
  openGraph: {
    title: 'Tabla Periódica Interactiva',
    description: 'Explora los 118 elementos químicos con datos detallados.',
    url: 'https://tpe.facore.cl',
    siteName: 'TPE FACore',
    locale: 'es_CL',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
