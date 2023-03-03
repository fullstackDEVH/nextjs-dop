import styles from '../layout.module.css';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_CODE } from '@/lib/constants';
interface Props {
  isDisabledVerifi: boolean;
  handleSendEmail: () => void;
  handleVerificationEmail: any;
  isHaveTitle?: boolean;
  email: string;
  errEmail: string;
  handleChangeEmail: (e: any) => void;
}
interface IFormInput {
  code: string;
}
export default function VerificationComponent({
  handleSendEmail,
  handleChangeEmail,
  email,
  errEmail,
  handleVerificationEmail,
  isDisabledVerifi,
  isHaveTitle = true,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(SCHEMA_CODE),
  });
  const handleSubmitForm = async (data: IFormInput) => {
    const { code } = data;
    handleVerificationEmail(code);
  };
  return (
    <Fragment>
      {isHaveTitle && <div className="signup__title">VERIFICATION</div>}
      <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.signup__form}>
        <div className="form__input">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <div className="form__input-wrapper">
            <input
              id="email"
              placeholder="Enter your email"
              className="input__field"
              autoComplete="off"
              value={email}
              onChange={handleChangeEmail}
            />
            <div onClick={handleSendEmail} className="form__input_send">
              <span>Send</span>
            </div>
          </div>
          <p className="form__err">{errEmail}</p>
        </div>
        <div className="form__input">
          <label className="form__label" htmlFor="verification">
            Verification code
          </label>
          <div className="form__input-wrapper">
            <input
              type="number"
              readOnly={isDisabledVerifi}
              autoComplete="off"
              id="verification"
              placeholder="Enter your verification code (6 digits)"
              className="input__field"
              {...register('code')}
            />
            <p className="form__err">{errors.code?.message}</p>
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={isDisabledVerifi}
            className={`btn__auth ${isDisabledVerifi ? 'disable' : ''}`}
          >
            Email Verification
          </button>
        </div>
        {/* {isHaveTitle ? (
          <div className={styles.form__btns}>
            <button className="btn__auth btn__auth--back">Back</button>
          </div>
        ) : (
          <div>1</div>
          //   <Button className="btn" variant="contained" onClick={handleIncrementStep}>
          //   Email Verification
          // </Button>
        )} */}
      </form>
    </Fragment>
  );
}
