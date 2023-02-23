'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  username: string;
  password: number;
}

const schema = yup
  .object({
    username: yup.string().required('Trường này không được để trống'),
    password: yup.number().positive().integer().required('Trường này không được để trống'),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Please enter username" />
      <p>{errors.username?.message}</p>

      <input {...register('password')} placeholder="Please enter password" />
      <p>{errors.password?.message}</p>
      <input type="submit" />
    </form>
  );
}
