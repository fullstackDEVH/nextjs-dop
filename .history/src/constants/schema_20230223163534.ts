import * as yup from 'yup';
export const SCHEMA_LOGIN = yup
  .object({
    username: yup.string().required('Trường này không được để trống'),
    password: yup.string().required('Trường này không được để trống'),
  })
  .required();
export const SCHEMA_CREATE = yup.object({
  username: yup.string().required('Username không được để trống'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .matches(
      REGEX_PASSWORD,
      'Mật khẩu phải nhiều 8 ký tự bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.'
    ),
  passwordConfirmation: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu')
    .oneOf([yup.ref('password')], 'Mật lại nhập khẩu không chính xác'),
});
