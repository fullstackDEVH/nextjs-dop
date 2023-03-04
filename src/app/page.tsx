import { useAppSelector } from '@/redux/hooks';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { selectCurrentUser } from './(auth)/authSlice';
import './page.module.css';
export default function App() {
  // const currentUser = useAppSelector(selectCurrentUser);
  // const { data: session, status }: any = useSession();
  // const router = useRouter();
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  // if (!session) {
  //   return router.push('/login');
  // }
  return (
    <div>
      Home Page
      {/* <button onClick={() => signOut()}>Sign out</button> */}
    </div>
  );
}
