import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useValidateForm = (schema: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<IFormInputs>({
  //     resolver: yupResolver(schema),
  //   });
  return { register, handleSubmit, errors };
};

export default useValidateForm;
