'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';
import { ENDPOINT_COUNTRIES_API } from '@/constants';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import VerificationComponent from './(components)/VerificationComponent';

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

  const nextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
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
      {currentStep === 3 && <VerificationComponent></VerificationComponent>}
    </div>
  );
}
