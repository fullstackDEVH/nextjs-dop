"use client";
// import component
import LoginWrapper from "@/components/login/LoginWrapperComponent";
import LogoLanguage from "@/components/login/LogoLanguageComponent";
// import MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styles from "../SendEmail/sendmail.module.css";

function SendEmail() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className={styles.sendmail__form}>
        <div className={styles.form__input}>
          <label htmlFor="email">Enter your email</label> <br />
          <TextField
            id="email"
            label="Enter your email"
            variant="filled"
            type="email"
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
            label="Enter verification code (6 digits)"
            variant="filled"
            type="number"
            className={styles.input}
          />
          <p className="err"></p>
        </div>

        <Button className="btn" variant="contained">
          Email Verification
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default SendEmail;
