'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function App() {
  // const { data: session, status }: any = useSession();
  // const router = useRouter();
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  // if (!session) {
  //   return router.push('/login');
  // }
  return (
    <div>
      Home Page
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
