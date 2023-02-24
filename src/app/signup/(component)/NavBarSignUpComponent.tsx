import React from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function NavBarSignUp() {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="step">
          <div className="line"></div>
          <div className="step__cicle">1</div>
          <span>Create Account</span>
        </div>
        <div className="step">
          <div className="line"></div>
          <div className="step__cicle">2</div>
          <span>Basic Information</span>
        </div>
        <div className="step">
          <div className="line"></div>
          <div className="step__cicle">3</div>
          <span>Verification</span>
        </div>
        <div className="step">
          <div className="step__cicle">4</div>
          <span>Done</span>
        </div>
      </div>
      <a href="/login" className="navbar__icon">
        <PersonOutlineIcon className="icon" />
        <br />
        <span>LOGIN</span>
      </a>
    </div>
  );
}

export default NavBarSignUp;
