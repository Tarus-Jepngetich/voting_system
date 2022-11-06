import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const addUser = (_user) => {
    setUser({ ...user, _user });
  };

  return (
    <UserContext.Provider value={{ user, addUser: addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
