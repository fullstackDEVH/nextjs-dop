'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  firstName: string;
  age: number;
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
      <input {...register('firstName')} />
      <p>{errors.firstName?.message}</p>

      <input {...register('age')} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}