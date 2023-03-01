import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_CREATE } from '@/lib/constants';
import styles from '../signup.module.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
interface IFormInputs {
  username: string;
  password: string;
  passwordConfirmation: string;
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
    // <div>
    //   <h3>CREATE ACCOUNT</h3>
    //   <form action="" onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <label htmlFor="">Username</label>
    //       <input {...register('username')} type="text" placeholder="Enter username here..." />
    //       <p>{errors.username?.message}</p>
    //     </div>
    //     <div>
    //       <label htmlFor="">Password</label>
    //       <input {...register('password')} type="password" placeholder="Enter password here..." />
    //       <p>{errors.password?.message}</p>
    //     </div>
    //     <div>
    //       <label htmlFor="">Confirm password</label>
    //       <input
    //         {...register('passwordConfirmation')}
    //         type="password"
    //         placeholder="Enter re-password here..."
    //       />
    //       <p>{errors.passwordConfirmation?.message}</p>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className={styles.signup__content}>
      <div className={styles.signup__title}>CREATE ACCOUNT</div>
      <div className={styles.signup__form}>
        <div className="form__input">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="username"
              placeholder="Enter your username"
              className="input__field"
            />
            <div className="form__input_icon">
              <PersonOutlineIcon className="form__input_icon-main" />
            </div>
            <p className="form__err"></p>
          </div>
        </div>

        {/* <div className={styles.form__input}>
          <label htmlFor="password">Password</label> <br />
          <TextField
            id="password"
            label="Enter your password"
            variant="filled"
            type="password"
            className={styles.input}
          />
          <p className="err"></p>
          <div className={styles.forminput__icon}>
            <LockIcon className={styles.icon} />
          </div>
        </div> */}

        <div className="form__input">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="password"
              placeholder="Enter your password"
              className="input__field"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
            <p className="form__err"></p>
          </div>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="confirmPassword"
              placeholder="Please Re-enter your password"
              className="input__field"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
            <p className="form__err"></p>
          </div>
        </div>

        <div>
          <button onClick={onSubmit} className="btn__auth">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}
