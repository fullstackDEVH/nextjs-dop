import styles from '../signup.module.css';
import { Fragment } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
interface Props {
  register: any;
  onSubmit: any;
  errors: any;
}
export default function CreateComponent({ onSubmit, register, errors }: Props) {
  return (
    <Fragment>
      <div className="signup__title">CREATE ACCOUNT</div>
      <form onSubmit={onSubmit} className={styles.signup__form}>
        <div className="form__input">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              {...register('username')}
              id="username"
              name="username"
              placeholder="Enter your username"
              className="input__field"
            />
            <div className="form__input_icon">
              <PersonOutlineIcon className="form__input_icon-main" />
            </div>
            {errors.username && <p className="form__err">{errors.username.message}</p>}
          </div>
        </div>
        <div className="form__input">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              id="password"
              {...register('password')}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input__field"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
            {errors.password && <p className="form__err">{errors.password.message}</p>}
          </div>
        </div>
        <div className="form__input">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              id="confirmPassword"
              type="password"
              placeholder="Please Re-enter your password"
              className="input__field"
              {...register('passwordConfirmation')}
              name="passwordConfirmation"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
            {errors.passwordConfirmation && (
              <p className="form__err">{errors.passwordConfirmation.message}</p>
            )}
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
