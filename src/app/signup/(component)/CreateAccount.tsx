import React from "react";
import styles from "@/app/signup/signup.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface Props {
  handleIncrementStep: () => void;
}

function CreateAccount({ handleIncrementStep }: Props) {
  return (
    <div className={styles.signupcontent}>
      <div className={styles.signupcontent__title}>CREATE ACCOUNT</div>
      <div className={styles.signupcontent__form}>
        <div className={styles.form__input}>
          <label htmlFor="username">Username</label> <br />
          <TextField
            id="username"
            label="Enter your username"
            variant="filled"
            type="text"
            className={styles.input}
          />
          <p className="err"></p>
          <div className={styles.forminput__icon}>
            <PersonOutlineIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.form__input}>
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
        <Button
          className="btn"
          variant="contained"
          onClick={handleIncrementStep}
        >
          Signup Now
        </Button>
      </div>
    </div>
  );
}

export default CreateAccount;
