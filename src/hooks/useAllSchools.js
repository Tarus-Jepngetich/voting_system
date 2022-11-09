import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useAllSchools = () => {
  const { token } = useLocalStorage();
  const [schools, setSchools] = useState(null);
  const prefix = useUrlPrefix();
  const axios = authAxios(token, prefix);

  useEffect(() => {
    axios
      .get(`${prefix}/school`)
      .then((res) => {
        setSchools(res.data);
      })
      .catch((err) => {
        setSchools(null);
      });
  }, [token]);

  return schools;
};
