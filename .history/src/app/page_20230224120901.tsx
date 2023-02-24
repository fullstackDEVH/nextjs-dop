'use client';
import { useSession } from 'next-auth/react';
export default function App() {
  const session = useSession();
  return <div>Home Page</div>;
}
