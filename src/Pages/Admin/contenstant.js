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
      <div className="flex items-center justify-between mt-12 mr-48  sm:ml-24">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-48">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contestant Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Student Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Identification Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="J31s/..../...."
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-2">
            <label className="block  text-sm font-medium text-gray-900 dark:text-gray-300">
              Upload Photo
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>
          <div className="mb-4">
            <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Description
            </label>
            <textarea
              id="message"
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="jibbi jabba"
              required=""
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Update
            </button>
          </div>
        </form>
        <form className="w-full  max-w-lg ">
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
