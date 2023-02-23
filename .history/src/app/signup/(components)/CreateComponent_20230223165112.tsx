import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_CREATE } from '@/constants';

interface IFormInputs {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function CreateComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_CREATE),
  });

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Username</label>
          <input {...register('username')} type="text" placeholder="Enter username here..." />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input {...register('password')} type="password" placeholder="Enter password here..." />
        </div>
        <div>
          <label htmlFor="">Confirm password</label>
          <input type="password" placeholder="Enter re-password here..." />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
}
