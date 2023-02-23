interface Props {
  handleChangeCode: (e: any) => void;
  handleChangeEmail: (e: any) => void;
  email: string;
  code: string;
  isDisabledVerifi: boolean;
  handleSendEmail: () => void;
  handleVerificationEmail: () => void;
}

export default function VerificationComponent({
  handleChangeCode,
  handleChangeEmail,
  email,
  code,
  isDisabledVerifi,
  handleSendEmail,
  handleVerificationEmail,
}: Props) {
  return (
    <div>
      <h3>VERIFICATION</h3>
      <form action="">
        <div>
          <label htmlFor="">Email</label>
          <input onChange={handleChangeEmail} type="text" placeholder="Enter your email" />
          <button onClick={handleSendEmail} type="button">
            Send
          </button>
        </div>
        <div>
          <label htmlFor="">Verification code</label>
          <input
            readOnly={isDisabledVerifi}
            type="number"
            placeholder="Enter verification code (6 digits)"
          />
        </div>
        <button disabled={isDisabledVerifi}>Email Verification</button>
      </form>
    </div>
  );
}
