import axios from "axios";
import { useEffect, useState } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import { toast } from "react-toastify";
import Toastify from "../../components/toastify";

export default function User() {
  const [userId, setUserId] = useState("");
  const [deleteUser, setDeleteUser] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    userId: "",
    passwordHash: "",
  });

  const users = useAllUsers();
  const prefix = useUrlPrefix();

  const notifyError = () => toast("Operation Failed");
  const notifySuccess = () => toast("Operation successful");

  useEffect(() => {
    if (users !== null)
      setDeleteUser(users.filter((value) => value.userId === userId));
  }, [users, userId]);

  return (
    <>
      <div className="flex place-items-center justify-center mt-12">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Name
            </label>
            <input
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
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
              onChange={(e) =>
                setEditUser({ ...editUser, userId: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="J31s/..../...."
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={(e) =>
                setEditUser({ ...editUser, passwordHash: e.target.value })
              }
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div className="flex items-center justify-between">
            <Toastify>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  axios
                    .post(`${prefix}/user/register`, editUser)
                    .then(() => notifySuccess())
                    .catch(() => notifyError());
                }}
              >
                Update
              </button>
            </Toastify>
          </div>
        </form>
        <form className="w-full  max-w-lg ml-24">
          <div className="flex   mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                User Id
              </label>
              <input
                onChange={(event) => setUserId(event.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="RegNo"
                placeholder="J31S/..../...."
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-8"></label>
              <Toastify>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (deleteUser.length === 0) {
                      notifyError();
                      return;
                    }
                    axios
                      .delete(`${prefix}/user/${deleteUser[0].id}`)
                      .then(() => notifySuccess())
                      .catch(() => notifyError());
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
