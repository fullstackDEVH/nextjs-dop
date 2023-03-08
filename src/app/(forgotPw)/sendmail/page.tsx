"use client";
// import component
import LoginWrapper from "../../../components/login/LoginWrapperComponent";
import LogoLanguage from "../../../components/login/LogoLanguageComponent";
// import MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "../sendmail/sendmail.css";

function sendmail() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className="sendmail__form">
        <div className="form__input">
          <span>Enter your email</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your email"
            variant="filled"
            type="email"
            className="input"
          />
        </div>
        <div className="form__input">
          <span>Verification code</span> <br />
          <TextField
            id="filled-basic"
            label="Enter verification code (6 digits)"
            variant="filled"
            type="number"
            className="input"
          />
        </div>
        <Button className="btn" variant="contained">
          Email Verification
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default sendmail;
