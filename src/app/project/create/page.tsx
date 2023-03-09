'use client';

import WrapperForm from '@/components/Common/WrapperForm/WrapperForm';
import { useState } from 'react';
import InforProject from './(components)/InforProject';
import ConfigRoles from './(components)/ConfigRoles';
import Stepper from './(components)/Stepper';
import UploadFiles from './(components)/UploadFile';
import DoneComponent from '@/components/Common/StepDone/StepDone';

export default function CreateProject() {
  const [step, setStep] = useState<number>(0);

  const handleNextStep = () => {
    setStep((pre) => pre + 1);
  };

  const handlePreStep = () => {
    setStep((pre) => pre - 1);
  };

  return (
    <WrapperForm title="Create new project">
      <Stepper step={step} />
      {
        [
          <InforProject key="infor" handleNextStep={handleNextStep} />,
          <ConfigRoles
            key="config roles"
            handlePreStep={handlePreStep}
            handleNextStep={handleNextStep}
          />,
          <UploadFiles
            key="upload files"
            handlePreStep={handlePreStep}
            handleNextStep={handleNextStep}
          />,
          <DoneComponent key="done" name_controll='View My Projects' title='Your Project Is Okay' />,
        ][step]
      }
    </WrapperForm>
  );
}
