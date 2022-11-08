import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useUrlPrefix } from "../hooks/useUrlPrefix";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const baseURL = useUrlPrefix();
  const { token } = useLocalStorage();

  const addUser = (_user) => {
    setUser({ ...user, _user });
  };

  const authAxios = useRef(
    axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  useEffect(() => {
    authAxios.current = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, addUser: addUser, axios: authAxios.current }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
