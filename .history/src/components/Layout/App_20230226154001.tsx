import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const router = useRouter();
  const { status }: any = useSession({
    required: true,
  });
  if (status === '1') {
    return router.push('/login');
  }
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
