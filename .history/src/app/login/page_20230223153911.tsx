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
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter your username" {...register('username')} />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
