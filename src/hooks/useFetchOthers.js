import { useUrlPrefix } from "./useUrlPrefix";

import { useState, useEffect } from "react";

export const useFetchOthers = (path, method, data) => {
  const prefix = useUrlPrefix();
  const url = prefix + path;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          method: method,
          headers: {
            // Authorization: jwt
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);

  return { response, error, loading };
}
