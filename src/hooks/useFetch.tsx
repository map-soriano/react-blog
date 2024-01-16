import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();

    fetch(url, { signal: abortFetch.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Data not found");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortFetch.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
