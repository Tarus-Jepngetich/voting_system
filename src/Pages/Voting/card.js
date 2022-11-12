import axios from "axios";
import { useEffect, useState } from "react";
import img1 from "../../Assets/vote.png";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";

export default function Card({ contestant }) {
  const [_contestant, setContestant] = useState(null);
  const prefix = useUrlPrefix();
  const [student, setStudent] = useState(null);
  const [name, setName] = useState(null);


  useEffect(() => {
    if (contestant) {
      axios
        .get(`${prefix}/contestant/${contestant?.id}`)
        .then((res) => {
          setContestant(res.data);

          if (res.data.student !== null) {
            setStudent(res.data.student);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [contestant]);

  useEffect(() => {
    if (student)
      axios
        .get(`${prefix}/student/${student}`)
        .then((res) => {
          if (res.data.user !== null) {
            if (res.data.user !== null) {
              setName(res.data.user.name);
            }
          }
        })
        .catch((err) => console.error(err));
  }, [student]);

  return (
    <>
      <div className="flex flex-row place-content-center py-6">
        <div className="h-96 max-h-full w-96 max-w-full rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64"
            src={`${_contestant !== null && _contestant.image}`}
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {name !== null && name}
            </div>
            <p className="text-gray-700 text-base">
              {`${_contestant !== null && _contestant.description}`}
            </p>
          </div>
        </div>

        <div className="h-96 max-h-full grid place-items-center rounded float-right overflow-hidden w-96 max-w-full shadow-lg">
          <button className=" hover:bg-gray-200 py-2 px-4 rounded">
            <img src={img1} className="w-16 rounded-lg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
