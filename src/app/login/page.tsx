"use client";

// import component
import LoginWrapper from "../../components/login/LoginWrapperComponent";
import LogoLanguage from "../../components/login/LogoLanguageComponent";
//import MUI
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";

import "../login/login.css";

function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className="login__form">
        <div className="form__input">
          <span>Username</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your username"
            variant="filled"
            className="input"
          />
          <div className="form-input__icon">
            <PersonOutlineIcon className="icon" />
          </div>
        </div>
        <div className="form__input">
          <span>Password</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your password"
            variant="filled"
            type="password"
            className="input"
          />
          <div className="form-input__icon">
            <LockIcon className="icon" />
          </div>
        </div>
        <div className="form__pwinter">
          <div className="pwinter__rememberpw">
            <Checkbox {...label} />
            <span>Remember me</span>
          </div>
          <a className="pwinter__forgot">forgot password?</a>
        </div>
        <Button className="btn form__btnlogin" variant="contained">
          Login now
        </Button>
        <Button href="/signup" className="form__btnsingup" variant="outlined">
          SingUp Now
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default Login;
