'use client';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function App() {
  const { data: session, status } = useClient();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  if (!session) {
    return <div>You are not logged in</div>;
  }
  return (
    <SessionProvider>
      Home Page
      <p>Signed in as {session.user.email}</p>
      <button onClick={handleSignOut}>Sign out</button>
    </SessionProvider>
  );
}
