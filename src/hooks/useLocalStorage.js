import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [global, setGlobal] = useState("null");

  useEffect(() => {
    setGlobal(localStorage.getItem("jwt"));
  }, [localStorage]);

  if (global !== "null" && global !== null) {
    const globalObj = JSON.parse(global);
    return { userId: globalObj.user, token: globalObj.token };
  }

  return { userId: "", token: "" };
};
