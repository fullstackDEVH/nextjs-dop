interface Country {
  name: any;
  code: string;
}

interface Props {
  countries: Country[];
}

export default function InformationComponent({ countries }: Props) {
  return (
    <div>
      <form action="">
        <div>
          <select name="" id="">
            {countries.map((country: Country) => (
              <option key={country.code} value={country.name.common}></option>
            ))}
          </select>
        </div>
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
          <input type="number" placeholder="Enter your phone number" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
