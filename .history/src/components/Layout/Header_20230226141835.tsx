import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import UserInfo from '../Common/UserInfo';

const AVATAR = 'https://mui.com/static/images/avatar/1.jpg';
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
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h3">My Profile</Typography>
      <UserInfo avatar={AVATAR} displayName={'test'}></UserInfo>
      {/* <p>Signed in as {session.user.email}</p> */}
    </Box>
  );
};

export default Header;
