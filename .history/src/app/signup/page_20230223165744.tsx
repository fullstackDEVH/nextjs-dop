'use client';
import { useState } from 'react';
import CreateComponent from './(components)/CreateComponent';
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleSubmitCreate = (data: any) => {
    // callApi
    console.log(data);
  };
  return (
    <div>
      <div className="navbar">Navbar</div>
      {currentStep === 1 && <CreateComponent onSubmit={handleSubmitCreate}></CreateComponent>}
    </div>
  );
}
