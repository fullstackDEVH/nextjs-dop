'use client';
import { Typography } from '@mui/material';

import Form from './Form';

const ProfileUser = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          color: 'var(--main-text)',
          fontWeight: '600',
          fontSize: '1.6rem',
          width: '100%',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        EDIT PROFILE
      </Typography>
      <Form />
    </>
  );
};

export default ProfileUser;
