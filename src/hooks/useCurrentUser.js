import { useEffect, useRef } from "react";
import { useAllUsers } from "./useAllUsers";
import { useLocalStorage } from "./useLocalStorage";

export const useCurrentUser = () => {
  const { userId } = useLocalStorage();
  const users = useAllUsers();

  console.log(users);
//   let user = useRef(null);
//   useEffect(() => {
//     user.current = users.reduce((acc, currentUser) => {
//       const { userId } = currentUser;
//       return { ...acc, [userId]: currentUser };
//     }, {})[userId];
//   }, [users, userId]);

//   return user;
};
