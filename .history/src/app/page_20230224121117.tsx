'use client';
import { useSession } from 'next-auth/react';
export default function App() {
  const session = useSession();
  console.log(session);
  return <div>Home Page</div>;
}
