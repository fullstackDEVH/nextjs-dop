'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function App() {
  const { status, data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login');
    }
  }, [router, status]);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <div>
      Home Page
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
