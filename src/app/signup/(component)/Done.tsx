import React from "react";

import Button from "@mui/material/Button";

function Done(){
  return (
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
  ); 
};

export default Done;
