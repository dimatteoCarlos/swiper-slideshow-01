//useFetch.ts

import { useEffect, useState } from 'react';

let DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

function useFetch(url: string, options = {}, dependencies: string[]) {
  const [data, setData] = useState<{ [key: string]: any }>({});

  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch(url, { ...DEFAULT_OPTIONS, ...options });

        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
        setIsError(!!error);
      }
      setIsLoading(false);
    }
    fetchData();

    return () => {
      setIsLoading(false);
    };
  }, dependencies);

  return { isLoading, isError, data };
}
export default useFetch;
