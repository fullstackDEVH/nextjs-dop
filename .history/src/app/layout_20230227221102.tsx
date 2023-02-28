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
import getCurrentUser from '@/utils/auth/getCurrentUser';
import { redirect } from 'next/navigation';
export default async function RootLayout({ children }: any) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  return (
    <html lang="en">
      <head />
      <body>
        {/* <SessionProvider session={null}>
        </SessionProvider> */}
        {/* <ReduxProvider> */}
        {/* <App>
              <Header></Header>
              <main>{children}</main>
              <Footer></Footer>
            </App> */}
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
