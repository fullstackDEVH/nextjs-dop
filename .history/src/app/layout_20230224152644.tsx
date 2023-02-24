'use client';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReduxProvider from './ReduxProvider';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { status, data } = useSession();
  const router = useRouter();
  console.log(data?.user);
  useEffect(() => {
    if (!data?.user) {
      router.push('/login');
    }
  }, [router, data]);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>
          <ReduxProvider>
            <header></header>
            <main>{children}</main>
            <footer></footer>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
