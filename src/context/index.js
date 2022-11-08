import { createContext, useContext, useState } from "react";
import { useAllUsers } from "../hooks/useAllUsers";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [canLogin, setCanLogin] = useState(false);
  // const users = useAllUsers();

  const addUser = (_user) => {
    setUser({ ...user, _user });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addUser: addUser,
        setCanLogin,
        canLogin,
        // users
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
