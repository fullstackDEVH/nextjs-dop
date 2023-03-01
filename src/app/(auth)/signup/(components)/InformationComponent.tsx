import { ENDPOINT_COUNTRIES_API } from '@/lib/constants';
import { SCHEMA_INFORMATION } from '@/lib/constants/schema';
import fetcher from '@/utils/helpers/fetcher';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from '../signup.module.css';
import useSWR from 'swr';

import dayjs, { Dayjs } from 'dayjs';
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
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

  const [valueDay, setValueDay] = useState<Dayjs | null>(dayjs(''));
  const handleChangeDay = (newValue: Dayjs | null) => {
    setValueDay(newValue);
  };

  const [country, setCountry] = useState('');
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  const { data, error, isLoading } = useSWR<Country[]>(ENDPOINT_COUNTRIES_API, fetcher);
  if (error) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    // <div>
    //   <h3>BASIC INFORMATION</h3>
    //   <form action="" onSubmit={handleSubmit(onSubmit)}>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Country</label>
    //       <select name="" id="">
    //         {data.map((country: Country, index) => (
    //           <option {...register('country')} key={index} value={country.name.common}>
    //             {country.name.common}
    //           </option>
    //         ))}
    //       </select>
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.country?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Fullname</label>
    //       <input {...register('fullName')} type="text" placeholder="Enter your fullname" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.fullName?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Address</label>
    //       <input {...register('address')} type="text" placeholder="Enter your address" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.address?.message}</p>
    //     </div>
    //     <div style={{ display: 'flex', gap: '0 20px', marginBottom: '20px' }}>
    //       <p>Sex</p>
    //       <div>
    //         <label htmlFor="male">Male</label>
    //         <input {...register('sex')} type="radio" id="male" name="sex" value="male" />
    //       </div>
    //       <div>
    //         <label htmlFor="fmale">Female</label>
    //         <input {...register('sex')} type="radio" id="fmale" name="sex" value="fmale" />
    //       </div>
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.sex?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">DateOfBirth</label>
    //       <input {...register('dateOfBirth')} type="date" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.dateOfBirth?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Phone</label>
    //       <input {...register('phone')} type="number" placeholder="Enter your phone number" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.phone?.message}</p>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className={styles.signup__content}>
      <div className={styles.signup__title}>BASIC INFORMATION</div>
      <div className={styles.signup__form}>
        <div className="form__input">
          <label className="form__label" htmlFor="country">
            Country
          </label>
          <div className="form__input-wrapper">
            <InputLabel id="demo-simple-select-filled-label">Choose your country</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={country}
              onChange={handleChangeCountry}
            >
              <MenuItem value="">
                <em>Choose your country</em>
              </MenuItem>
              <MenuItem value={10}>Viet Nam</MenuItem>
              <MenuItem value={20}>American</MenuItem>
              <MenuItem value={30}>Korea</MenuItem>
            </Select>
            <p className="form__err"></p>
          </div>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="fullName">
            Fullname
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="fullName"
              placeholder="Enter your fullname"
              className="input__field"
            />
            <p className="form__err"></p>
          </div>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="address">
            Address
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="address"
              placeholder="Enter your address"
              className="input__field"
            />
            <p className="form__err"></p>
          </div>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="sex">
            Sex
          </label>
          <div className="form__input-wrapper">
            <RadioGroup
              className={styles.radio}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <p className="form__err"></p>
          </div>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="dateOfBirth">
            Date Of Birth
          </label>
          <div className="form__input-wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className={styles.input}
                inputFormat="MM/DD/YYYY"
                value={valueDay}
                onChange={handleChangeDay}
                renderInput={(params: any) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <p className="form__err"></p>
          </div>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="phoneNumber">
            Phone Number
          </label>

          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="input__field"
              type="number"
            />
            <p className="form__err"></p>
          </div>
        </div>

        <div>
          <button className="btn__auth">Signup Now</button>
        </div>
        {/* <Button className="btn" variant="contained" onClick={handleIncrementStep}>
          Signup Now
        </Button> */}
      </div>
    </div>
  );
}
