"use client";
// import component
import LoginWrapper from "../../../components/login/LoginWrapperComponent";
import LogoLanguage from "../../../components/login/LogoLanguageComponent";
import SignupNavbar from "../../../components/signup/SignupNavbarComponent";
// import MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "../step4/signupstep4.css";

function step4() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <SignupNavbar />
      <div className="signupcontent">
        <div className="signupcontent__title">CREATE ACCOUNT</div>
        <div className="signupcontent__form">
          <img src="/imgs/mail.png" alt="" />
          <span>Your Email Is Successfully Verified</span>
          <Button href="/login" className="btn" variant="contained">
            Login Now
          </Button>
        </div>
      </div>
    </LoginWrapper>
  );
}
export default step4;
