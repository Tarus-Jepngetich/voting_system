import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useAllSchools } from "../../hooks/useAllSchools";
import { useState } from "react";
import axios from "axios";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import { toast } from "react-toastify";
import Toastify from "../../components/toastify";

export default function StudentForm() {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const schools = useAllSchools();
  const prefix = useUrlPrefix();

  const [newStudent, setNewStudent] = useState({
    user: "",
    school: "",
  });

  const notifyError = () => toast("Operation Failed");
  const notifySuccess = () => toast("Operation successful");

  return (
    <>
      <div className="grid place-items-center h-screen w-full bg-gradient-to-r from-pink-200 to-cyan-200 ">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto ">
          <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={() => {
                navigate("/User");
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Fill the contestant form
              </h3>
              <form className="space-y-6" action="#"></form>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Idenification Number
                </label>
                <input
                  id="RegNo"
                  value={user.userId}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="J31S/..../...."
                  required=""
                />
                <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Names
                </label>
                <input
                  id="RegNo"
                  value={user.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Jane Doe"
                  required=""
                />
                <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  School
                </label>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-full px-3 mb-1 md:mb-0">
                    <div className="relative flex">
                      <div className="pointer-events-none absolute   float left-56  inset-y-0 flex items-center  px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      <select
                        onChange={(e) => {
                          setNewStudent({
                            ...newStudent,
                            school:
                              schools != null &&
                              schools.filter(
                                (value) => value.schoolId === e.target.value
                              )[0].id,
                            user: user.id,
                          });
                        }}
                        className="block mr-24 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option> defaults</option>

                        {schools !== null &&
                          schools.map((value, i) => (
                            <option key={i}> {value.schoolId}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                <Toastify>
                  <button
                    type="submit"
                    onClick={() => {
                      axios
                        .post(`${prefix}/student`, newStudent)
                        .then(() => notifySuccess())
                        .catch(() => notifyError());
                    }}
                    className="w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </Toastify>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
