'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';
import useSWR from 'swr';
import { ENDPOINT_COUNTRIES_API } from '@/constants';
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const { data, error, isLoading } = useSWR(ENDPOINT_COUNTRIES_API);
  console.log(data);
  const nextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };
  const handleSubmitCreate = (data: any) => {
    // callApi
    console.log(data);
    nextStep();
  };

  return (
    <div>
      <div className="navbar">Navbar</div>
      {currentStep === 1 && <CreateComponent onSubmit={handleSubmitCreate}></CreateComponent>}
      {currentStep === 2 && <InformationComponent></InformationComponent>}
    </div>
  );
}
