import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Omnipresence',
  description:
    'Empowering Safety, Everywhere. Our tech ecosystem is designed to provide a seamless layer of protection for women, leveraging real-time monitoring, intelligent alerts, and proactive solutions.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
