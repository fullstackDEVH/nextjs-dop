import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function createAccount() {
  return (
    <div className="signupcontent">
      <div className="signupcontent__title">CREATE ACCOUNT</div>
      <div className="signupcontent__form">
        <div className="form__input">
          <span>Username</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your username"
            variant="filled"
            type="text"
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
        <div className="form__input">
          <span>Confirm Password</span> <br />
          <TextField
            id="filled-basic"
            label="Please Re-enter your password"
            variant="filled"
            type="password"
            className="input"
          />
          <div className="form-input__icon">
            <LockIcon className="icon" />
          </div>
        </div>
        <Button href="/signup/step2" className="btn" variant="contained">
          Signup Now
        </Button>
      </div>
    </div>
  );
}

export default createAccount;
