'use client';
import { signOut, useSession } from 'next-auth/react';
export default function App() {
  const session = useSession();
  console.log(session);
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
