'use client';

// import component
import LoginWrapper from '@/components/login/LoginWrapperComponent';
import LogoLanguage from '@/components/login/LogoLanguageComponent';

//import MUI
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';

import styles from '../ChangePassword/changePassword.module.css';

function ChangePassword() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className={styles.changePw__form}>
        <div className={styles.form__input}>
          <label htmlFor="newPassword">New Password</label> <br />
          <TextField
            id="newPassword"
            label="Enter your new password"
            variant="filled"
            type="password"
            className={styles.input}
          />
          <p className="err"></p>
          <div className={styles.forminput__icon}>
            <LockIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="confirmPassword">Confirm Password</label> <br />
          <TextField
            id="confirmPassword"
            label="Please Re-enter your password"
            variant="filled"
            type="password"
            className={styles.input}
          />
          <p className="err"></p>
          <div className={styles.forminput__icon}>
            <LockIcon className={styles.icon} />
          </div>
        </div>
        <Button className="btn form__btnlogin" variant="contained">
          Change Password
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default ChangePassword;
