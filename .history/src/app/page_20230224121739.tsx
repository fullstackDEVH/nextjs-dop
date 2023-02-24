'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function App() {
  const { status, data } = useSession();
  console.log(data);
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
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
