import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const { data: session, status }: any = useSession({ required: true });

  const router = useRouter();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (!session) {
    return router.push('/login');
  }

  return children;
}
