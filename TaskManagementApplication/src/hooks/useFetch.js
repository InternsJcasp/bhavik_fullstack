import { useEffect, useState } from "react";

export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.resolve(fetcher())
      .then((res) => {
        if (!cancelled) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "Request failed");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const refetch = () => {
    setLoading(true);
    setError(null);
    Promise.resolve(fetcher())
      .then(setData)
      .catch((err) => setError(err.message || "Request failed"))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}
