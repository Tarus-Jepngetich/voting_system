import { useNavigate } from "react-router-dom";
import kamala from "../../Assets/kamala.jpg";
import { useFetchGet } from "../../hooks/useFetchGet";
import { useGlobalUser } from "../../hooks/useGlobalUser";

export { default as EditContestant } from "./contenstant";
export { default as EditSchool } from "./school";
export { default as EditStudent } from "./student";
export { default as EditUser } from "./user";

export default function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full ">
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              0
            </span>
            <span className="text-sm text-blueGray-400">Students</span>
          </div>
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              0
            </span>
            <span className="text-sm text-blueGray-400">Users</span>
          </div>
          <div className="lg:mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              0
            </span>
            <span className="text-sm text-blueGray-400">Schools</span>
          </div>
          <div className="lg:mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
              0
            </span>
            <span className="text-sm text-blueGray-400">Contestants</span>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 place-items-center mt-4">
        <div>
          <div
            className="max-w-sm w-auto lg:flex"
            onClick={() => navigate("/EditUser")}
          >
            <div className="border p-4">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Admin only
                </p>
                <p className="text-gray-700 text-base">Edit User</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={kamala}
                  alt="Avatar of Jonathan Reinink"
                />
              </div>
            </div>
          </div>

          <div
            className="max-w-sm w-auto mt-4 lg:flex"
            onClick={() => navigate("/EditSchool")}
          >
            <div className="border p-4">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Admin only
                </p>
                <p className="text-gray-700 text-base">Edit School</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={kamala}
                  alt="Avatar of Jonathan Reinink"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="max-w-sm w-auto lg:flex"
            onClick={() => navigate("/EditStudent")}
          >
            <div className="border p-4">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Admin only
                </p>
                <p className="text-gray-700 text-base">Edit Student</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={kamala}
                  alt="Avatar of Jonathan Reinink"
                />
              </div>
            </div>
          </div>
          <div
            className="max-w-sm w-auto lg:flex"
            onClick={() => navigate("/EditContestant")}
          >
            <div className="border p-4 mt-4">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Admin only
                </p>
                <p className="text-gray-700 text-base">Edit contestant</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={kamala}
                  alt="Avatar of Jonathan Reinink"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
