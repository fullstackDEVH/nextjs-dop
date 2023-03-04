'use client';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReduxProvider from './ReduxProvider';
import { SessionProvider, useSession } from 'next-auth/react';
import Header from '@/components/Layout/Header/Header';
import App from '@/components/Layout/App';
import Footer from '@/components/Layout/Footer/Footer';
import { usePathname } from 'next/navigation';
import LayoutAuth from './(auth)/layout';
import getCurrentUser from '@/utils/auth/getCurrentUser';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import SideBar from '@/components/Layout/Sidebar/SideBar';

interface Props {
  children: ReactNode;
  pageName: string;
}
export default function RootLayout({ children }: Props) {
  const isShow =
    typeof window !== 'undefined' &&
    !['/login', '/signup', '/forgot'].includes(window.location.pathname);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={null}>
          <ReduxProvider>
            {isShow && <Header></Header>}
            {isShow ? (
              <Grid
                container
                style={{
                  backgroundImage: 'url(/bg-profile.png)',
                  backgroundPosition: 'center',
                  width: '100%',
                  minHeight: 'calc( 100vh - 80px)',
                  backgroundSize: 'cover',
                }}
              >
                <Grid item xs={1}>
                  <SideBar />
                </Grid>
                <Grid item xs={11}>
                  <main className="container__content">{children}</main>
                </Grid>
              </Grid>
            ) : (
              <main>{children}</main>
            )}
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
