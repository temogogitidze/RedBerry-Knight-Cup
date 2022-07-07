import { useEffect, useState, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchHandler = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return { data, error };
};

export default useFetch;
