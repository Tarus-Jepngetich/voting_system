import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useAllContestants = () => {
  const { token } = useLocalStorage();
  const [isLoading, setIsLoading] = useState();
  const [contestants, setContestants] = useState(null);
  const prefix = useUrlPrefix();
  const axios = authAxios(token, prefix);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${prefix}/contestant`)
      .then((res) => {
        setContestants(res.data);
      })
      .catch((err) => {
        setContestants(null);
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  return contestants;
};
