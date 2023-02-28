import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const { status }: any = useSession({ required: true });
  const router = useRouter();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status !== 'authenticated') {
    router.push('/login');
    return null;
  }
  return <>{children}</>;
}
