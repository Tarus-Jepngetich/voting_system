import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useAllStudents = () => {
  const { token } = useLocalStorage();
  const [students, setStudents] = useState(null);
  const prefix = useUrlPrefix();
  const axios = authAxios(token, prefix);

  useEffect(() => {
    axios
      .get(`${prefix}/student`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        setStudents(null);
      });
  }, [token]);

  return students;
};
