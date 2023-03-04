'use client';
import LockIcon from '@mui/icons-material/Lock';
import styles from '../forgot.module.css';
import LogoLanguage from '../../(components)/HeaderAuth';

function ChangePassword() {
  return (
    <>
      <LogoLanguage />
      <form className={styles.changePw__form}>
        <div className="form__input">
          <label className="form__label" htmlFor="newPassword">
            New Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
              className="input__field"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
          </div>
          <p className="form__err"></p>
        </div>

        <div className="form__input">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="true"
              id="confirmPassword"
              type="password"
              placeholder="Please Re-enter your password"
              className="input__field"
            />
            <div className="form__input_icon">
              <LockIcon className="form__input_icon-main" />
            </div>
          </div>
          <p className="form__err"></p>
        </div>
        <div className="gap_btn">
          <button className="btn__auth">Change Password</button>
        </div>
      </form>
    </>
  );
}
export default ChangePassword;
