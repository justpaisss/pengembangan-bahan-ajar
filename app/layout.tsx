import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Website Literasi & Kreativitas Digital',
  description: 'Modul digital mandiri terintegrasi kurikulum universitas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}