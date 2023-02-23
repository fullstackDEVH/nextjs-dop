'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';

interface Country {
  name: string;
  code: string;
}
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };
  const handleSubmitCreate = (data: any) => {
    // callApi
    console.log(data);
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
      {currentStep === 2 && <InformationComponent></InformationComponent>}
    </div>
  );
}
