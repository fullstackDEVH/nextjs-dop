"use client";

import { Grid } from "@mui/material";
import React, { useState } from "react";
//import component
import NavBarSignUp from "./(component)/NavBarSignUpComponent";
import CreateAccount from "./(component)/CreateAccount";
import Infomation from "./(component)/Infomation";
import Verification from "./(component)/Verification";
import Done from "./(component)/Done";
import LoginWrapper from "@/components/login/LoginWrapperComponent";
import LogoLanguage from "@/components/login/LogoLanguageComponent";
//css
import "../signup/signup.css";

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div>
      <LoginWrapper>
        <LogoLanguage />

        {/* <NavBarSignUp />
        <Infomation /> */}

        <Grid container>
          <Grid item xs={3}>
            <NavBarSignUp />
          </Grid>
          <Grid item xs={9}>
            {currentStep === 1 && <CreateAccount onIncrementStep={incrementStep} />}
            {currentStep === 2 && <Infomation onIncrementStep={incrementStep} />}
            {currentStep === 3 && <Verification onIncrementStep={incrementStep} />}
            {currentStep === 4 && <Done />}
          </Grid>
        </Grid>
      </LoginWrapper>
    </div>
  );
}

export default SignUp;
