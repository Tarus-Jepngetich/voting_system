import VotingCard from "./votingCard";
import contestants from "../../contestants";

export default function Voting() {
  const c = contestants.map((value, index) => {
    return (
      <VotingCard
        img={value.img}
        name={value.name}
        description={value.description}
        key={index}
      />
    );
  });

  return <> {c} </>;
}
