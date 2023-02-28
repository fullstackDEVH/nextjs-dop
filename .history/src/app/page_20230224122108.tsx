'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function App() {
  const { status, data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!data?.user) {
      router.push('/login');
    }
  }, [router, data]);
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