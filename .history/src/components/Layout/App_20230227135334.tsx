import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps) {
  const router = useRouter();
  const { status }: any = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });
  console.log(status);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
