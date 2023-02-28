interface Props {
  url: string;
  method: string;
  body?: any;
}

const useFetch = ({ method, url, body }: Props) => {
  const [isLoading, setIsLoading] = useState('false');
};
export default useFetch;
