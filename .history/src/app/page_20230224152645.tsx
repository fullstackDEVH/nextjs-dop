'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function App() {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      Home Page
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
