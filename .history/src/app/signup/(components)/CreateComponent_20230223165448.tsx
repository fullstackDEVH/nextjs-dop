import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_CREATE } from '@/constants';

interface IFormInputs {
  username: string;
  password: string;
  confirmPassword: string;
}
interface Props {
  onSubmit: any;
}

export default function CreateComponent({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_CREATE),
  });

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Username</label>
          <input {...register('username')} type="text" placeholder="Enter username here..." />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input {...register('password')} type="password" placeholder="Enter password here..." />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <label htmlFor="">Confirm password</label>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Enter re-password here..."
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
}
