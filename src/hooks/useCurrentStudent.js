import { useEffect, useState } from "react";
import { authAxios } from "../utils/authAxios";
import { useLocalStorage } from "./useLocalStorage";
import { useUrlPrefix } from "./useUrlPrefix";

export const useCurrentStudent = () => {
  const { token, id } = useLocalStorage();
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState(null);
  const [isStudent, setIsStudent] = useState(false);
  const [isLoading, setIsLoading] = useState();

  const prefix = useUrlPrefix();
  const axios = authAxios(token, prefix);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${prefix}/student`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        setStudents(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  useEffect(() => {
    if (students) {
      const _student = students.filter((value) => value.user.id === id);

      if (_student.length > 0) {
        setIsStudent(true);
        setStudent(_student[0]);
      } else {
        setIsStudent(false);
      }
    }
  }, [students, id]);

  return { ...student, isLoading, isStudent };
};
