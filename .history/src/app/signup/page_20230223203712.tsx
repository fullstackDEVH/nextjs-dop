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
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataSignUp, setDataSignUp] = useState({});
  const { data, error, isLoading } = useSWR<Country[]>(ENDPOINT_COUNTRIES_API, fetcher);
  if (error) {
    return <div>Error loading data</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  const nextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };
  const handleSubmitCreate = (data: any) => {
    // callApi
    nextStep();
    setDataSignUp({
      ...dataSignUp,
      data,
    });
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
      {currentStep === 2 && <InformationComponent countries={data}></InformationComponent>}
    </div>
  );
}
