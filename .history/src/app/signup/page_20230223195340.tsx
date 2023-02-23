'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
import InformationComponent from './(components)/InformationComponent';
import { useClient } from 'next/data-client';
import { ENDPOINT_COUNTRIES_API } from '@/constants';
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  // const { data, error, isLoading } = useSWR(ENDPOINT_COUNTRIES_API);
  const { data, error } = useClient(ENDPOINT_COUNTRIES_API);

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
