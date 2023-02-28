'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_LOGIN } from '@/lib/constants';
import { signIn } from 'next-auth/react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Common/Loading';
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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const onSubmit = async (data: IFormInputs) => {
  //   const { username, password } = data;
  //   setIsLoading(true);
  //   try {
  //     const res: any = await signIn('credentials', {
  //       username,
  //       password,
  //       redirect: false,
  //     });
  //     if (res.error) return alert(res.error);
  //     router.push('/');
  //   } catch (err: any) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const onSubmit = async (data: IFormInputs) => {
    const { username, password } = data;
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // handle ERR HERE
      const userData = await response.json();
      // RECEIVE TOKEN AND USER INFO FROM API HERE
      // FAKE THIS
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Loading isLoading={isLoading} />
      <input {...register('username')} placeholder="Please enter username" />
      <p>{errors.username?.message}</p>

      <input type="password" {...register('password')} placeholder="Please enter password" />
      <p>{errors.password?.message}</p>
      <button type="submit">Login</button>
    </form>
  );
}
