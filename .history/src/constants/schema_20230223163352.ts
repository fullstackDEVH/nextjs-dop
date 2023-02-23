export const SCHEMA_LOGIN = yup
  .object({
    username: yup.string().required('Trường này không được để trống'),
    password: yup.string().required('Trường này không được để trống'),
  })
  .required();
