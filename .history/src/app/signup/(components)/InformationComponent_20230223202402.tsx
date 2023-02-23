import { ENDPOINT_COUNTRIES_API } from '@/constants';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
interface Country {
  name: any;
  code: string;
}

interface Props {
  countries: Country[];
}

export default function InformationComponent() {
  const { data, error, isLoading } = useSWR<Country[]>(ENDPOINT_COUNTRIES_API, fetcher);
  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <form action="">
        <div>
          <select name="" id="">
            {countries.map((country: Country, index) => (
              <option key={index} value={country.name.common}>
                {country.name.common}
              </option>
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
