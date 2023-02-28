'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const router = useRouter();
  const { status }: any = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
      // The user is not authenticated, handle it here.
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
