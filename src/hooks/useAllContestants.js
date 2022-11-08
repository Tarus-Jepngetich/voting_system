import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useAllContestants = () => {
  const { token } = useLocalStorage();
  const [contestant, setContestant] = useState(null);
  const prefix = useUrlPrefix();
  const axios = authAxios(token, prefix);

  useEffect(() => {
    axios
      .get(`${prefix}/contestant`)
      .then((res) => {
        setContestant(res.data);
      })
      .catch((err) => {
        setContestant(null);
      });
  }, [token]);

  return contestant;
};
