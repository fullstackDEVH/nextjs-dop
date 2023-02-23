export default function VerificationComponent() {
  return (
    <div>
      <h3>VERIFICATION</h3>
      <form action="">
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email" />
          <button type="button">Send</button>
        </div>
        <div>
          <label htmlFor="">Verification code</label>
          <input type="number" placeholder="Enter verification code (6 digits)" />
          <button type="button">Send</button>
        </div>
      </form>
    </div>
  );
}
