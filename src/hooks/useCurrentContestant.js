import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useCurrentContestant = (studentId) => {
  const { token } = useLocalStorage();
  const [contestant, setContestant] = useState(null);
  const [contestants, setContestants] = useState(null);
  const [isContestant, setIsContestant] = useState(false);
  const prefix = useUrlPrefix();

  const axios = authAxios(token, prefix);

  useEffect(() => {
    axios
      .get(`${prefix}/contestant`)
      .then((res) => setContestants(res.data))
      .catch((err) => setContestants(null));
  }, [token]);

  useEffect(() => {
    if (contestants) {
      const _contestant = contestants.filter(
        (value) => value.student.id === studentId
      );

      if (_contestant.length > 0) {
        setIsContestant(true);
        setContestant(_contestant[0]);
      } else {
        setIsContestant(false);
      }
    }
  }, [contestants, studentId]);

  return { ...contestant, isContestant };
};
