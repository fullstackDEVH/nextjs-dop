import { ENDPOINT_COUNTRIES_API } from '@/constants';
import { SCHEMA_INFORMATION } from '@/constants/schema';
import fetcher from '@/utils/fetcher';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
interface Country {
  name: any;
  code: string;
}
interface IFormInputs {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface Props {
  onSubmit: any;
}

export default function InformationComponent({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_INFORMATION),
  });
  const { data, error, isLoading } = useSWR<Country[]>(ENDPOINT_COUNTRIES_API, fetcher);
  if (error) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>BASIC INFORMATION</h3>
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
            {...register('passwordConfirmation')}
            type="password"
            placeholder="Enter re-password here..."
          />
          <p>{errors.passwordConfirmation?.message}</p>
        </div>
        <button type="submit">Submit</button>
    </div>
  );
}
