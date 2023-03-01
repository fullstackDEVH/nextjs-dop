import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import UserInfo from '../Common/UserInfo';

const AVATAR = 'https://mui.com/static/images/avatar/1.jpg';
const Header = () => {
  // const { data: session, status }: any = useSession();
  const { data: session, status }: any = useSession();
  console.log(session);
  // const router = useRouter();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  // if (status === 'authenticated') {
  //   return (
  //     <Box
  //       sx={{
  //         width: '100%',
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       <p>My Profile</p>
  //       {/* <UserInfo avatar={user.avatar} displayName={user.displayName}></UserInfo> */}
  //       {/* <p>Signed in as {session.user.email}</p> */}
  //     </Box>
  //   );
  // }
  return <></>;
};

export default Header;
