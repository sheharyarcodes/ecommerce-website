import { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/fetchDataFromApi";

const useFetch = (url = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setLoading("Loading...");
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
        console.log("useFetch ::", err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
