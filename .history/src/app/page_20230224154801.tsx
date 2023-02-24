'use client';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function App() {
  // const { status, data } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!data?.user) {
  //     router.push('/login');
  //   }
  // }, [router, data]);
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <SessionProvider>
      Home Page
      <button onClick={handleSignOut}>Sign out</button>
    </SessionProvider>
  );
}
