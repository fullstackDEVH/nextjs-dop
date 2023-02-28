import { useSession } from 'next-auth/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const { status }: any = useSession({ required: true });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
