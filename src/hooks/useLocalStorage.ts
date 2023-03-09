import { useEffect, useState } from 'react';

const useLocalStorage = (keyName: string) => {
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem(keyName) ?? '[]'));
  console.assert(storage);
  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(storage));
  }, [storage, keyName]);
  return storage;
};

export default useLocalStorage;
