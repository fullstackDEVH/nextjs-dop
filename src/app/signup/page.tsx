'use client';

import { Grid } from '@mui/material';
import React, { useState } from 'react';
//import component
import NavBarSignUp from './(component)/NavBarSignUpComponent';
import CreateAccount from './(component)/CreateAccount';
import Infomation from './(component)/Infomation';
import Verification from './(component)/Verification';
import Done from './(component)/Done';
import LoginWrapper from '@/components/login/LoginWrapperComponent';
import LogoLanguage from '@/components/login/LogoLanguageComponent';
//css

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div>
      <LoginWrapper>
        <LogoLanguage />

        <Grid container>
          <Grid item xs={3}>
            <NavBarSignUp />
          </Grid>
          <Grid item xs={9}>
            {currentStep === 1 && <CreateAccount handleIncrementStep={incrementStep} />}
            {currentStep === 2 && <Infomation handleIncrementStep={incrementStep} />}
            {currentStep === 3 && <Verification handleIncrementStep={incrementStep} />}
            {currentStep === 4 && <Done />}
          </Grid>
        </Grid>
      </LoginWrapper>
    </div>
  );
}
export default SignUp;
