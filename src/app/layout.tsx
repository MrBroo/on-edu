import { Inter } from "next/font/google";
import SessionProviderWrapper from '../common/components/SessionProviderWrapper';
import React from "react";
import dynamic from 'next/dynamic';
import { metadata } from './metadata';

export { metadata };
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const ClientThemeProvider = dynamic(() => import('../common/hoc/ClientThemeProvider'), { ssr: false });

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fonts/inter-v12-latin/inter-v12-latin.css"
        />
      </head>
      <body className={inter.className}>
      <SessionProviderWrapper>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </SessionProviderWrapper>
      </body>
    </html>
  );
}
