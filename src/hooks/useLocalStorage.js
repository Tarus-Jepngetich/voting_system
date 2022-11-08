import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [global, setGlobal] = useState(null);

  useEffect(() => {
    setGlobal(localStorage.getItem("jwt"));
  }, []);

  if (global !== null) {
    const globalObj = JSON.parse(global);
    const userId = globalObj.user.userId;
    const name = globalObj.user.name;
    const id = globalObj.user.id;
    const isAdmin = globalObj.user.isAdmin;
    const token = globalObj.token;

    return { userId, name, id, isAdmin, token };
  }

  return { userId: "", name: "", id: "", isAdmin: "", token: "" };
};
