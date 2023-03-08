'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';
import StepDoneComponent from './(components)/DoneComponent';
import styles from './signup.module.css';
import PublicIcon from '@mui/icons-material/Public';
import Grid from '@mui/material/Grid';
import NavBarComponent from './(components)/NavBarComponent';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { regexEmail } from '@/utils';
import VerificationComponent from '../(components)/VerificationComponent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_CREATE, SCHEMA_SIGNUP } from '@/lib/constants';
interface Country {
  name: string;
  code: string;
}
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  // const [dataSignUp, setDataSignUp] = useState({
  //   username: '',
  //   password: '',
  //   passwordConfirmation: '',
  //   country: '',
  //   fullName: '',
  //   address: '',
  //   sex: '',
  //   dateOfBirth: '',
  //   phone: '',
  //   email: '',
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SCHEMA_CREATE) });
  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm({ resolver: yupResolver(SCHEMA_SIGNUP) });
  const [dataSignUp, setDataSignUp] = useState({});
  const [isDisabledVerifi, setisDisabledVerifi] = useState(true);
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');
  // const handleChangeDataSignUp = (e: any) => {
  //   const { name, value } = e.target;
  //   setDataSignUp({
  //     ...dataSignUp,
  //     [name]: value,
  //   });
  // };
  const handleNextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };
  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev -= 1));
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleSendEmail = () => {
    const isEmail = regexEmail(email);
    if (!isEmail) {
      setErrEmail('Email is not a valid email!');
      return;
    }
    alert('Code sent successfully, code is 666666');
    setisDisabledVerifi(false);
    setErrEmail('');
  };
  const handleVerificationEmail = (code: number) => {
    if (code !== 666666) {
      alert('Please check your code and try again');
      return false;
    }
    alert('Verify email successfully');
    setDataSignUp({
      ...dataSignUp,
      email,
    });
    handleNextStep();
  };
  const onSubmitStep1 = (data: Record<string, any>) => {
    setDataSignUp({
      ...dataSignUp,
      data,
    });
    handleNextStep();
  };
  const onSubmitStep2 = (data: Record<string, any>) => {
    setDataSignUp({
      ...dataSignUp,
      data,
    });
    handleNextStep();
  };
  return (
    <>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={3}>
          <NavBarComponent currentStep={currentStep} />
        </Grid>
        <Grid item xs={9}>
          <div className={styles.signup__header}>
            {currentStep === 2 || currentStep === 3 ? (
              <div className={styles.flex} onClick={handlePrevStep}>
                <ArrowBackIosNewIcon
                  style={{
                    color: '#555555',
                  }}
                  className={styles.header__icon}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                    fontWeight: '700',
                  }}
                >
                  BACK TO PREVIOUS
                </Typography>
              </div>
            ) : (
              <div></div>
            )}
            <div className={styles.flex}>
              <PublicIcon className={styles.header__icon} />
              <span className={styles.header__text}>ENG</span>
            </div>
          </div>
          <div className={styles.signup__content}>
            {currentStep === 1 && (
              <CreateComponent
                onSubmit={handleSubmit(onSubmitStep1)}
                register={register}
                errors={errors}
              ></CreateComponent>
            )}
            {currentStep === 2 && (
              <InformationComponent
                onSubmit={handleSubmitStep2(onSubmitStep2)}
                register={registerStep2}
                errors={errorsStep2}
              ></InformationComponent>
            )}
            {currentStep === 3 && (
              <VerificationComponent
                isHaveTitle={true}
                errEmail={errEmail}
                handleChangeEmail={handleChangeEmail}
                email={email}
                isDisabledVerifi={isDisabledVerifi}
                handleSendEmail={handleSendEmail}
                handleVerificationEmail={(code: number) => handleVerificationEmail(code)}
              ></VerificationComponent>
            )}
            {currentStep === 4 && <StepDoneComponent></StepDoneComponent>}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
