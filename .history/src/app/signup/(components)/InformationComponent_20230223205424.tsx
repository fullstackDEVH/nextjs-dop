import { SCHEMA_INFORMATION } from '@/constants/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

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
  countries: Country[];
}

export default function InformationComponent({ countries }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_INFORMATION),
  });
  return (
    <div>
      <form action="">
        <div>
          <select name="" id="">
            {countries.map((country: Country, index) => (
              <option key={index} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Fullname</label>
          <input type="text" placeholder="Enter your fullname" />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <div style={{ display: 'flex', gap: '0 20px' }}>
          <p>Sex</p>
          <div>
            <label htmlFor="male">Male</label>
            <input type="radio" id="male" name="gender" value="male" />
          </div>
          <div>
            <label htmlFor="fmale">Female</label>
            <input type="radio" id="fmale" name="gender" value="fmale" />
          </div>
        </div>
        <div>
          <label htmlFor="">DateOfBirth</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="number" placeholder="Enter your phone number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
