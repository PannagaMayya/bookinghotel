import { useEffect, useState } from "react";
import axios from "../axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        setData(result?.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData(result?.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};
export default useFetch;
