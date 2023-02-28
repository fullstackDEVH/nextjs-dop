import { useState, useEffect } from 'react';
interface Props {
  url: string;
  method: string;
  body?: any;
}

const useFetch = ({ method, url, body }: Props) => {
  const [isLoading, setIsLoading] = useState('false');
  useEffect(() => {}, []);
  return isLoading;
};
export default useFetch;
