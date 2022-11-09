import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useAllUsers = () => {
  const { token } = useLocalStorage();
  const [users, setUsers] = useState(null);
  const prefix = useUrlPrefix();
  const axios = authAxios(token, prefix);


  useEffect(() => {
    axios
      .get(`${prefix}/user`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setUsers(null);
      });
  }, [token]);


  return users;
};
