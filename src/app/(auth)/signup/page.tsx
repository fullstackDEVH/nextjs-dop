'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';
import VerificationComponent from './(components)/VerificationComponent';
import StepDoneComponent from './(components)/StepDoneComponent';

interface Country {
  name: string;
  code: string;
}
interface IFormInputs {
  country: string;
  fullName: string;
  address: string;
  sex: string;
  dateOfBirth: string;
  phone: string;
}
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataSignUp, setDataSignUp] = useState({});
  const [isDisabledVerifi, setisDisabledVerifi] = useState(true);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const nextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangeCode = (event: any) => {
    setCode(event.target.value);
  };
  const handleSubmitCreate = (data: any) => {
    const { username, password, passwordConfirmation } = data;
    setDataSignUp({
      ...dataSignUp,
      username,
      password,
      passwordConfirmation,
    });
    // callApi
    nextStep();
  };
  const handleSubmitInformation = (data: IFormInputs) => {
    const { address, country, dateOfBirth, fullName, phone, sex } = data;
    setDataSignUp({
      ...dataSignUp,
      country,
      fullName,
      address,
      sex,
      dateOfBirth,
      phone,
    });
    // callApi
    nextStep();
  };
  const handleSendEmail = () => {
    if (email === '') {
      alert('Please enter your email adddress');
      return false;
    }
    alert('Code sent successfully, code is 666666');
    setisDisabledVerifi(false);
  };
  const handleVerificationEmail = () => {
    if (code === '') {
      alert('Please enter code');
      return false;
    }
    if (code !== '666666') {
      alert('Please check your code and try again');
      return false;
    }
    alert('Verify email successfully');
    setDataSignUp({
      ...dataSignUp,
      email,
    });
    nextStep();
  };
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {currentStep === 1 && <CreateComponent onSubmit={handleSubmitCreate}></CreateComponent>}
      {currentStep === 2 && (
        <InformationComponent onSubmit={handleSubmitInformation}></InformationComponent>
      )}
      {currentStep === 3 && (
        <VerificationComponent
          handleChangeCode={handleChangeCode}
          handleChangeEmail={handleChangeEmail}
          isDisabledVerifi={isDisabledVerifi}
          email={email}
          code={code}
          handleSendEmail={handleSendEmail}
          handleVerificationEmail={handleVerificationEmail}
        ></VerificationComponent>
      )}
      {currentStep === 4 && <StepDoneComponent data={dataSignUp}></StepDoneComponent>}
    </div>
  );
}
