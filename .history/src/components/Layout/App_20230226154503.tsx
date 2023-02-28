import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const { status }: any = useSession({ required: true });
  const router = useRouter();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
