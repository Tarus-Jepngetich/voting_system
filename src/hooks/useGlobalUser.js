import { useEffect, useState } from "react";

export const useGlobalUser = () => {
  const [global, setGlobal] = useState("null");

  useEffect(() => {
    setGlobal(localStorage.getItem("jwt"));
  }, [localStorage]);

  return global;
};
