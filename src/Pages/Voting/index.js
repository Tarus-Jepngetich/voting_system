import VotingCard from "./votingCard";
import { useAllContestants } from "../../hooks/useAllContestants";
import { useCurrentStudent } from "../../hooks/useCurrentStudent";

export default function Voting() {
  const contestants = useAllContestants();
  const student = useCurrentStudent();

  const c =
    student.isStudent &&
    contestants !== null &&
    contestants.filter((value) => value.student.school === student.school.id);

  return (
    <>
      {(student.isLoading === undefined || student.isLoading === true) && (
        <div></div>
      )}
      {!student.isLoading && student.isStudent ? (
        <div className="text-center text-bold text-2xl m-2">
          <span>All contestants in {student?.school?.name}</span>
          <div className="border-2">
            {c &&
              c.map((value, i) => {
                return (
                  <VotingCard
                    img={value.image}
                    name={value.student.user.name}
                    description={value.description}
                    id={value.id}
                    key={i}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        !student.isLoading &&
        !student.isStudent &&
        student.isLoading !== undefined && (
          <div className="grid place-items-center justify-center">
            <img src="https://www.gif-maniac.com/gifs/54/53631.gif" alt="" />
            <span className="text-xl text-blue-900">
              You're an administrator!! You're supposed to be impartial
            </span>
          </div>
        )
      )}
    </>
  );
}
