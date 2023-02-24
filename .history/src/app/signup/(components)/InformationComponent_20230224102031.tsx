import { ENDPOINT_COUNTRIES_API } from '@/lib/constants';
import { SCHEMA_INFORMATION } from '@/lib/constants/schema';
import fetcher from '@/utils/fetcher';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
interface Country {
  name: any;
  code: string;
}
interface IFormInputs {
  country: string;
  fullName: string;
  address: string;
  sex: string;
  dateOfBirth: string;
  phone: string;
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
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="">Country</label>
          <select name="" id="">
            {data.map((country: Country, index) => (
              <option {...register('country')} key={index} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.country?.message}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="">Fullname</label>
          <input {...register('fullName')} type="text" placeholder="Enter your fullname" />
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.fullName?.message}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="">Address</label>
          <input {...register('address')} type="text" placeholder="Enter your address" />
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.address?.message}</p>
        </div>
        <div style={{ display: 'flex', gap: '0 20px', marginBottom: '20px' }}>
          <p>Sex</p>
          <div>
            <label htmlFor="male">Male</label>
            <input {...register('sex')} type="radio" id="male" name="sex" value="male" />
          </div>
          <div>
            <label htmlFor="fmale">Female</label>
            <input {...register('sex')} type="radio" id="fmale" name="sex" value="fmale" />
          </div>
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.sex?.message}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="">DateOfBirth</label>
          <input {...register('dateOfBirth')} type="date" />
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.dateOfBirth?.message}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="">Phone</label>
          <input {...register('phone')} type="number" placeholder="Enter your phone number" />
          <p style={{ color: 'red', marginTop: '10px' }}>{errors.phone?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
