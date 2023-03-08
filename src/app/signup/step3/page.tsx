"use client";
// import component
import LoginWrapper from "../../../components/login/LoginWrapperComponent";
import LogoLanguage from "../../../components/login/LogoLanguageComponent";
import SignupNavbar from "../../../components/signup/SignupNavbarComponent";
// import MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "../step3/signupstep3.css";

function step3() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <SignupNavbar />
      <div className="signupcontent">
        <div className="signupcontent__title">CREATE ACCOUNT</div>
        <div className="signupcontent__form">
          <div className="form__input">
            <span>Email</span> <br />
            <TextField
              id="filled-basic"
              label="Enter your username"
              variant="filled"
              type="Email"
              className="input"
            />
            <Button className="btn-sendmail" variant="text">
              Send
            </Button>
          </div>
          <div className="form__input">
            <span>Verification code</span> <br />
            <TextField
              id="filled-basic"
              label="Enter your verification code (6 digits)"
              variant="filled"
              type="password"
              className="input"
            />
          </div>
          <Button href="/signup/step4" className="btn" variant="contained">
            Email Verification
          </Button>
        </div>
      </div>
    </LoginWrapper>
  );
}
export default step3;
