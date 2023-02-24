'use client';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function App() {
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
    <>
      Home Page
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
