"use client";

// import component
import LoginWrapper from "@/components/login/LoginWrapperComponent";
import LogoLanguage from "@/components/login/LogoLanguageComponent";
//import MUI
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
//
import { useState } from "react";

import styles from "../login/login.module.css";

function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className={styles.login__form}>
        {/* username  */}
        <div className={styles.form__input}>
          <label htmlFor="username">Username</label> <br />
          <TextField
            id="username"
            label="Enter your username"
            variant="filled"
            className={styles.input}
          />
          <p className="err"></p>
          <div className={styles.forminput__icon}>
            <PersonOutlineIcon className={styles.icon} />
          </div>
        </div>
        {/* password  */}
        <div className={styles.form__input}>
          <label htmlFor="password">Password</label> <br />
          <TextField
            id="password"
            label="Enter your password"
            variant="filled"
            type="password"
            className={styles.input}
          />
          <div className={styles.forminput__icon}>
            <LockIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.form__pwinter}>
          <div className={styles.pwinter__rememberpw}>
            <Checkbox {...label} />
            <span>Remember me</span>
          </div>
          <a className={styles.pwinter__forgot}>forgot password?</a>
        </div>
        <Button className="btn form__btnlogin" variant="contained">
          Login now
        </Button>
        <Button
          href="/signup"
          className={styles.form__btnsingup}
          variant="outlined"
        >
          SingUp Now
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default Login;
