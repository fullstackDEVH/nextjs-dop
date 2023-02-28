import { SessionProvider, useSession } from 'next-auth/react';

interface LayoutProps {
  children: React.ReactNode;
}

function Auth({ children }: LayoutProps) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}
