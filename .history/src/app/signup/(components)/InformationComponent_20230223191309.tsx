export default function InformationComponent() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Fullname</label>
          <input type="text" placeholder="Enter your fullname" />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <div>{/* sex */}</div>
        <div>{/* date of birth */}</div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
