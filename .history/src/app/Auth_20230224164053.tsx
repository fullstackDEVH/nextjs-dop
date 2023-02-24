import { useSession } from 'next-auth/react';

export default function Auth({ children }: any) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}
