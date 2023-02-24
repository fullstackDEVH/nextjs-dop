'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_LOGIN } from '@/lib/constants';
import { signIn } from 'next-auth/react';
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
  const onSubmit = async (data: IFormInputs) => {
    const { username, password } = data;
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });
      console.log(res);
    } catch (err) {
      console.log(err.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Please enter username" />
      <p>{errors.username?.message}</p>

      <input type="password" {...register('password')} placeholder="Please enter password" />
      <p>{errors.password?.message}</p>
      <button type="submit">Login</button>
    </form>
  );
}
