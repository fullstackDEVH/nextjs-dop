import React from 'react';
import styles from '@/app/signup/signup.module.css';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function NavBarSignUp() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.step}>
          <div className={styles.line}></div>
          <div className={styles.step__cicle}>1</div>
          <label>Create Account</label>
        </div>
        <div className={styles.step}>
          <div className={styles.line}></div>
          <div className={styles.step__cicle}>2</div>
          <label>Basic Information</label>
        </div>
        <div className={styles.step}>
          <div className={styles.line}></div>
          <div className={styles.step__cicle}>3</div>
          <label>Verification</label>
        </div>
        <div className={styles.step}>
          <div className={styles.step__cicle}>4</div>
          <label>Done</label>
        </div>
      </div>
      <a href="/login" className={styles.navbar__icon}>
        <PersonOutlineIcon className={styles.icon} />
        <br />
        <span>LOGIN</span>
      </a>
    </div>
  );
}

export default NavBarSignUp;
