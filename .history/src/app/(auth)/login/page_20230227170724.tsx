'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_LOGIN } from '@/lib/constants';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Common/Loading';
import Cookies from 'js-cookie';
import { useAppDispatch } from '@/redux/hooks';
import { authActions } from '../authSlice';
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
  const dispatch = useAppDispatch();
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
      // ...
      const userData = await response.json();
      // RECEIVE TOKEN AND USER INFO FROM API HERE
      // ...
      // FAKE THIS:
      const TOKEN = '8994ae3c8342470c3557753019103f5d';
      const displayName = 'haudn';
      const avatar = 'https://mui.com/static/images/avatar/1.jpg';
      Cookies.set('auth', TOKEN, {
        expires: 1,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      });
      dispatch(
        authActions.loginSuccess({
          displayName,
          avatar,
        })
      );
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
