import { useState } from "react";
import { useAllContestants } from "../../hooks/useAllContestants";
import axios from "axios";
import { useEffect } from "react";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import { toast } from "react-toastify";
import Toastify from "../../components/toastify";

export default function Contestant() {
  const [contestantId, setContestantId] = useState("");
  const [deleteContestant, setDeleteContestant] = useState(null);

  const contestants = useAllContestants();
  const prefix = useUrlPrefix();

  const notifyDeleteError = () => toast("Delete Operation Failed");
  const notifyDeleteSuccess = () =>
    toast("The Contestant was deleted successfully");

  useEffect(() => {
    if (contestants !== null)
      setDeleteContestant(
        contestants.filter((value) => value.id === contestantId)
      );
  }, [contestants, contestantId]);

  return (
    <>
      <div className="flex place-items-center justify-center sm:ml-24">
        <form className="w-full mt-32 max-w-lg ">
          <div className="flex   mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Contestant Id
              </label>
              <input
                onChange={(event) => setContestantId(event.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="RegNo"
                placeholder="636e6676cb2268**********"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-8"></label>
              <Toastify>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (deleteContestant.length === 0) {
                      notifyDeleteError();
                      return;
                    }
                    axios
                      .delete(`${prefix}/contestant/${deleteContestant[0].id}`)
                      .then(() => notifyDeleteSuccess())
                      .catch(() => notifyDeleteError());
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                >
                  Delete
                </button>
              </Toastify>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
