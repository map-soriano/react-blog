import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setData(data);
      });
  }, [url]);

  return { data, isPending };
};

export default useFetch;
