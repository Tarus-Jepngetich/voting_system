import vote from "../../Assets/vote.png";
import { useNavigate } from "react-router-dom";

export default function VotingCard({ img, name, description }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex flex-row place-content-center py-6"
        onClick={() => navigate(`/Voting/${name}`)}
      >
        <div className="h-96 max-h-full w-96 max-w-full rounded overflow-hidden shadow-lg">
          <img className="w-full" src={img} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>

        <div className="h-96 max-h-full grid place-items-center rounded float-right overflow-hidden w-96 max-w-full shadow-lg">
          <button className="hover:bg-slate-400 bg-slate-200 font-bold py-2 px-4 rounded-lg">
            <img src={vote} alt="" height={100} width={100}/>
          </button>
        </div>
      </div>
    </>
  );
}
