import { ENDPOINT_COUNTRIES_API } from '@/lib/constants';
import fetcher from '@/utils/helpers/fetcher';
import styles from '../signup.module.css';
import useSWR from 'swr';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Fragment } from 'react';
interface Country {
  name: any;
  code: string;
}
interface Props {
  register: any;
  onSubmit: any;
  errors: any;
}

export default function InformationComponent({ onSubmit, register, errors }: Props) {
  // const { data, error, isLoading } = useSWR<Country[]>(ENDPOINT_COUNTRIES_API, fetcher);
  // if (error) {
  //   return <div>Error loading data</div>;
  // }
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // const handleSubmitForm = async (data: IFormInputs) => {
  //   console.log(data);
  //   handleNextStep();
  // };
  return (
    <Fragment>
      <div className="signup__title">BASIC INFORMATION</div>
      <form onSubmit={onSubmit} className={styles.signup__form}>
        <div className="form__input form__input--infomation">
          <label className="form__label form__label--infomation" htmlFor="fullName">
            Fullname
          </label>
          <div className="form__input-wrapper form__input-wrapper--infomation">
            <input
              id="fullName"
              {...register('fullName')}
              name="fullName"
              placeholder="Enter your fullname"
              className="input__field input__field--information"
            />
            {errors.fullName && <p className="form__err">{errors.fullName.message}</p>}
          </div>
        </div>
        <div className="form__input form__input--infomation">
          <label className="form__label form__label--infomation" htmlFor="address">
            Address
          </label>
          <div className="form__input-wrapper form__input-wrapper--infomation">
            <input
              id="address"
              {...register('address')}
              name="address"
              placeholder="Enter your address"
              className="input__field input__field--information"
            />
            {errors.address && <p className="form__err">{errors.address.message}</p>}
          </div>
        </div>
        <div className="form__input form__input--infomation">
          <label className="form__label form__label--infomation" htmlFor="phone">
            Phone Number
          </label>
          <div className="form__input-wrapper form__input-wrapper--infomation">
            <input
              id="phone"
              {...register('phone')}
              name="phone"
              placeholder="Enter your phone number"
              className="input__field input__field--information"
            />
            {errors.phone && <p className="form__err">{errors.phone.message}</p>}
          </div>
        </div>
        <div className={styles.form__btns}>
          <button type="submit" className="btn__auth btn__auth--next">
            Next
          </button>
        </div>
      </form>
    </Fragment>
  );
}
