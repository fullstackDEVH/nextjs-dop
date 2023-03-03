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

import LogoLanguage from '../(components)/HeaderAuth';
import styles from './login.module.css';
import Checkbox from '@mui/material/Checkbox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
interface IFormInputs {
  username: string;
  password: string;
}
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_LOGIN),
  });
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  // const dispatch = useAppDispatch();

  const onSubmit = async (data: IFormInputs) => {
    const { username, password } = data;
    // setIsLoading(true);
    // try {
    //   const res: any = await signIn('credentials', {
    //     username,
    //     password,
    //     redirect: false,
    //   });
    //   if (res.error) return alert(res.error);
    //   router.push('/');
    // } catch (err: any) {
    //   console.log(err);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  // const onSubmit = async (data: IFormInputs) => {
  //   // const { username, password } = data;
  //   setIsLoading(true);
  //   try {
  //     // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
  //     //   method: 'POST',
  //     //   body: JSON.stringify({
  //     //     username,
  //     //     password,
  //     //   }),
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     // });
  //     // handle ERR HERE
  //     // ...
  //     // const userData = await response.json();
  //     // RECEIVE TOKEN AND USER INFO FROM API HERE
  //     // ...
  //     // FAKE THIS:
  //     const TOKEN = '8994ae3c8342470c3557753019103f5d';
  //     const displayName = 'haudn';
  //     const avatar = 'https://mui.com/static/images/avatar/1.jpg';
  //     Cookies.set('auth', TOKEN, {
  //       expires: 1,
  //       sameSite: 'strict',
  //       secure: process.env.NODE_ENV === 'production',
  //     });
  //     dispatch(
  //       authActions.loginSuccess({
  //         displayName,
  //         avatar,
  //       })
  //     );
  //     router.push('/');
  //   } catch (err: any) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <LogoLanguage />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
        <div className="form__input">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="username"
              placeholder="Enter your username"
              className="input__field"
              {...register('username')}
            />
            <div className="form__input_icon">
              <PersonOutlineIcon className="form__input_icon-main" />
            </div>
          </div>
          <p className="form__err">{errors.username?.message}</p>
        </div>
        <div className="form__input">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              {...register('password')}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input__field"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
          </div>
          <p className="form__err">{errors.password?.message}</p>
        </div>
        <div className={styles.form__pwinter}>
          <div className={styles.pwinter__rememberpw}>
            <Checkbox
              {...label}
              sx={{
                padding: '0px',
                transform: 'scale(1.3)',
              }}
            />
            <span className={styles.pwinter__rememberpw_text}>Remember me</span>
          </div>
          <Link href="/forgot" className={styles.pwinter__forgot}>
            Forgot password?
          </Link>
        </div>
        <div className={styles.form__buttons}>
          <button type="submit" className="btn__auth">
            Login Now
          </button>
          <div className={styles.gap}>
            <span className={styles.gap__text}>OR</span>
          </div>
          <button className="btn__auth btn__auth-signup">
            <Link href="/signup">Signup Now</Link>
          </button>
        </div>
      </form>
    </>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <Loading isLoading={isLoading} />
    //   <input {...register('username')} placeholder="Please enter username" />
    //   <p>{errors.username?.message}</p>

    //   <input type="password" {...register('password')} placeholder="Please enter password" />
    //   <p>{errors.password?.message}</p>
    //   <button type="submit">Login</button>
    // </form>
  );
}
