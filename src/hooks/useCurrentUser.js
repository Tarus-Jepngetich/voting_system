import { useLocalStorage } from "./useLocalStorage";

export const useCurrentUser = () => {
  const user = useLocalStorage();
  return user;
};
