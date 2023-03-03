import { REGEX_PASSWORD } from './regex';
import * as yup from 'yup';

const fieldRequired = 'This field is required!';
export const SCHEMA_SIGNUP = yup.object().shape({
  fullName: yup.string().required(fieldRequired),
  address: yup.string().required(fieldRequired),
  phone: yup.string().required(fieldRequired),

  // sex: yup.string().required(fieldRequired),
  // country: yup.string().required(fieldRequired),
  // dateOfBirth: yup.string().required(fieldRequired),
});
export const SCHEMA_EMAIL = yup.object({
  email: yup.string().email('Field should contain a valid e-mail').max(255).required(fieldRequired),
});

export const SCHEMA_CODE = yup.object({
  code: yup
    .number()
    .test('len', 'Must be exactly 6 characters', (val) => val?.toString().length === 6)
    .required(fieldRequired),
});
export const SCHEMA_LOGIN = yup.object({
  username: yup.string().required(fieldRequired),
  password: yup.string().required(fieldRequired),
});
export const SCHEMA_CREATE = yup.object({
  username: yup.string().required(fieldRequired),
  password: yup
    .string()
    .required(fieldRequired)
    .matches(
      REGEX_PASSWORD,
      'Password must be 8 characters long, including uppercase letters, lowercase letters, numbers and special characters!'
    ),
  passwordConfirmation: yup
    .string()
    .required(fieldRequired)
    .oneOf([yup.ref('password')], 'Password re-entered is incorrect!'),
});
