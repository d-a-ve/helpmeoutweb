import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setLoading(false);
      return json;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      return error;
    }
  };

  return { loading, error, fetchData };
};

export default useFetch;
