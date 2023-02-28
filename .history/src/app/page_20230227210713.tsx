'use client';
import { useAppSelector } from '@/redux/hooks';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { selectCurrentUser } from './(auth)/authSlice';
import Icon from "@/static/Icon.png"
import Image from 'next/image';

export default function App() {
  const currentUser = useAppSelector(selectCurrentUser);
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
      <button onClick={() => signOut()}>Sign out</button>
      <Image src={Icon} ></Image>
    </div>
  );
}
