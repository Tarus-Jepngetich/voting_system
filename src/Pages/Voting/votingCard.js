import img1 from "../../Assets/vote.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import { useCurrentStudent } from "../../hooks/useCurrentStudent";
import { useEffect, useState } from "react";

const POSITION = {
  Congressperson: "hasVotedForCongressPerson",
  "Male Delegate": "hasVotedForMaleDelegate",
  "Female Delegate": "hasVotedForFemaleDelegate",
};

export default function VotingCard({
  img,
  name,
  description,
  id,
  position,
  votes,
}) {
  const navigate = useNavigate();
  const prefix = useUrlPrefix();
  const student = useCurrentStudent();
  const [hasVoted, setHasVoted] = useState();

  useEffect(() => {
    if (position === "Congressperson") {
      setHasVoted(student.hasVotedForCongressPerson);
    } else if (position === "Male Delegate") {
      setHasVoted(student.hasVotedForMaleDelegate);
    } else if (position === "Female Delegate") {
      setHasVoted(student.hasVotedForFemaleDelegate);
    }
  }, [position, student]);

  return (
    <>
      <div className="flex flex-row place-content-center py-6">
        <div
          className="h-96 max-h-full w-96 max-w-full rounded overflow-hidden shadow-lg"
          onClick={() => navigate(`/Voting/${id}`)}
        >
          <img className="w-full h-48" src={img} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            for
            <p className="text-gray-700 text-base">{position}</p>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>

        <div
          className={`${
            hasVoted === true && "cursor-not-allowed"
          }h-96 max-h-full grid place-items-center rounded float-right overflow-hidden w-96 max-w-full shadow-lg`}
        >
          <span>{votes}</span>
          {hasVoted === false && (
            <button
              onClick={() => {
                axios
                  .put(`${prefix}/contestant/${id}`, {
                    votes: `${votes + 1}`,
                  })
                  .then((res) => {
                    axios
                      .put(`${prefix}/student/${student.id}`, {
                        [POSITION[position]]: true,
                      })
                      .then(() => console.log("success"))
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err))
                  .finally(() => window.location.reload());
              }}
              disabled={hasVoted === true}
              className=" hover:bg-gray-200 py-2 px-4 rounded"
            >
              <img src={img1} className="w-16 rounded-lg" alt="" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
