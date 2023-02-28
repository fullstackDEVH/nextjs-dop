import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
  // const { data: session, status }: any = useSession();
  // const router = useRouter();
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  // if (!session) {
  //   return router.push('/login');
  // }
  return (
    <Box sx={{
      width: 100%,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      Header
      {/* <p>Signed in as {session.user.email}</p> */}
    </Box>
  );
};

export default Header;
