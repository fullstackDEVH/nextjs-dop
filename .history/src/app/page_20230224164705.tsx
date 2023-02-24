'use client';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function App() {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  if (!session) {
    return <div>You are not logged in</div>;
  }
  // useEffect(() => {
  //   if (status !== 'authenticated') {
  //     router.push('/login');
  //   }
  // }, [router, status]);
  // const handleSignOut = async () => {
  //   await signOut();
  //   router.push('/login');
  // };

  return (
    <SessionProvider>
      Home Page
      <p>Signed in as {session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </SessionProvider>
  );
}
