'use client';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReduxProvider from './ReduxProvider';
import { SessionProvider, useSession } from 'next-auth/react';
import Header from '@/components/Layout/Header';
import App from '@/components/Layout/App';
import Footer from '@/components/Layout/Footer';
import { usePathname } from 'next/navigation';
import LayoutAuth from './(auth)/layout';
export default function RootLayout({ children }: any) {
  const router = usePathname();
  if (router === '/login') {
    return (
      <html lang="en">
        <head />
        <body>
          {/* <ReduxProvider>
            <header>Head</header>
            <main>{children}</main>
            <Footer></Footer>
          </ReduxProvider> */}
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={null}>
          <ReduxProvider>
            <App>
              <Header></Header>
              <main>{children}</main>
              <Footer></Footer>
            </App>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
