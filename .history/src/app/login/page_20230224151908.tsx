'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_LOGIN } from '@/lib/constants';
import { signIn } from 'next-auth/react';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';

interface IFormInputs {
  username: string;
  password: string;
}
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_LOGIN),
  });
  const [isloading, setIsLoading] = useState(false);
  const onSubmit = async (data: IFormInputs) => {
    const { username, password } = data;
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });
      console.log(res);
    } catch (err: any) {
      console.log(err.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: `${isloading ? 'flex' : 'none'}`,
          position: 'fixed',
          top: '50%',
          left: '50%',
        }}
      >
        <CircularProgress />
      </Box>
      <input {...register('username')} placeholder="Please enter username" />
      <p>{errors.username?.message}</p>

      <input type="password" {...register('password')} placeholder="Please enter password" />
      <p>{errors.password?.message}</p>
      <button type="submit">Login</button>
    </form>
  );
}
