'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';
import { ENDPOINT_COUNTRIES_API } from '@/constants';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

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
  payment: string;
  employeeNumber: string;
}
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataSignUp, setDataSignUp] = useState({});

  const nextStep = () => {
    setCurrentStep((prev) => (prev += 1));
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
    console.log('1');
    const { address, country, dateOfBirth, fullName, phone, sex } = data;
    console.log(data);
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
    // nextStep();
  };
  console.log(dataSignUp);
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
    </div>
  );
}
