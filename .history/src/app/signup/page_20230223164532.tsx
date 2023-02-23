'use client';
import { useState } from 'react';
export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_LOGIN),
  });
  return <div>SignUp</div>;
}
