'use client';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReduxProvider from './ReduxProvider';
import { SessionProvider } from 'next-auth/react';
import Header from '@/components/Layout/Header';
import App from '@/components/Layout/App';
import Footer from '@/components/Layout/Footer';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReduxProvider>
          <Header></Header>
          <App>{children}</App>
          <Footer></Footer>
        </ReduxProvider>
      </body>
    </html>
  );
}