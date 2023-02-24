import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Header = () => {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <div>
      <p>Signed in as</p>
    </div>
  );
};

export default Header;
