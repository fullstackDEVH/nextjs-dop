import React from 'react';
import styles from '@/app/signup/signup.module.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface Props {
  handleIncrementStep: () => void;
}

function Verification({ handleIncrementStep }: Props) {
  return (
    <div className={styles.signupcontent}>
      <div className={styles.signupcontent__title}>VERIFICATION</div>
      <div className={styles.signupcontent__form}>
        <div className={styles.form__input}>
          <label htmlFor="email">Email</label> <br />
          <TextField
            id="email"
            label="Enter your username"
            variant="filled"
            type="Email"
            className={styles.input}
          />
          <p className="err"></p>
          <Button className={styles.btn_sendmail} variant="text">
            Send
          </Button>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="verificationCode">Verification code</label> <br />
          <TextField
            id="verificationCode"
            label="Enter your verification code (6 digits)"
            variant="filled"
            type="password"
            className={styles.input}
          />
          <p className="err"></p>
        </div>
        <Button className="btn" variant="contained" onClick={handleIncrementStep}>
          Email Verification
        </Button>
      </div>
    </div>
  );
}

export default Verification;
