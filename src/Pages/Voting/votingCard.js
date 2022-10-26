import img1 from "../../Assets/vote.png";
import { useNavigate } from "react-router-dom";

export default function VotingCard({ img, name, description }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row place-content-center py-6">
        <div
          className="h-96 max-h-full w-96 max-w-full rounded overflow-hidden shadow-lg"
          onClick={() => navigate(`/Voting/${name}`)}
        >
          <img
            className="w-full h-64"
            src={img}
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{description}</p>
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
