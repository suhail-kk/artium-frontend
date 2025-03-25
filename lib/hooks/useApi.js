import { useState } from "react";

const okStatus = [200, 201];

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunc(...args);
      if (okStatus.includes(response.status)) {
        setData(response.data);
        return {
          isError: false,
          data: response.data,
          errors: [],
        };
      }

      setError(response.data?.errors || "Unexpected error");
      return {
        isError: true,
        errors: response.data?.errors || ["Unexpected error"],
      };
    } catch (err) {
      setError(err?.response?.data?.errors || "Network error");
      return {
        isError: true,
        errors: err?.response?.data?.errors || ["Network error"],
      };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request, setData };
};

export default useApi;
