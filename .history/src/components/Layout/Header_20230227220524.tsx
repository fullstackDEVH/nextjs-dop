import getCurrentUser from '@/utils/auth/getCurrentUser';
import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import UserInfo from '../Common/UserInfo';

const AVATAR = 'https://mui.com/static/images/avatar/1.jpg';
const Header = async () => {
  // const { data: session, status }: any = useSession();
  // const router = useRouter();
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }
  // if (!session) {
  //   return router.push('/login');
  // }
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
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
      <UserInfo avatar={user.avatar} displayName={user.displayName}></UserInfo>
      {/* <p>Signed in as {session.user.email}</p> */}
    </Box>
  );
};

export default Header;
