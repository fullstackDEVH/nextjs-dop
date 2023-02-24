'use client';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReduxProvider from './ReduxProvider';
import { SessionProvider } from 'next-auth/react';
import Auth from './Auth';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Auth>
          <ReduxProvider>
            <header></header>
            <main>{children}</main>
            <footer></footer>
          </ReduxProvider>
        </Auth>
      </body>
    </html>
  );
}
