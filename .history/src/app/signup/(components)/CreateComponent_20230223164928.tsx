export default function CreateComponent() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter username here..." />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter password here..." />
        </div>
        <div>
          <label htmlFor="">Confirm password</label>
          <input type="password" placeholder="Enter re-password here..." />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
}
