import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Verification(props: { onIncrementStep: () => void }) {
  return (
    <div className="signupcontent">
      <div className="signupcontent__title">VERIFICATION</div>
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
        <Button onClick={props.onIncrementStep} className="btn" variant="contained">
          Email Verification
        </Button>
      </div>
    </div>
  );
};

export default Verification;
