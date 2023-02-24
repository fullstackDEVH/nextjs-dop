'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Header = () => {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (!session) {
      router.push('/login');
    }
  }, [session, status]);
  return (
    <div>
      <p>Signed in as</p>
    </div>
  );
};

export default Header;
