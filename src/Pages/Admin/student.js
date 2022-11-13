import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAllStudents } from "../../hooks/useAllStudents";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import { toast } from "react-toastify";
import Toastify from "../../components/toastify";

export default function Student() {
  const [studentId, setStudentId] = useState("");
  const [deleteStudent, setDeleteStudent] = useState(null);

  const students = useAllStudents();
  const prefix = useUrlPrefix();

  const notifyDeleteError = () => toast("Delete Operation Failed");
  const notifyDeleteSuccess = () =>
    toast("The Student was deleted successfully");

  useEffect(() => {
    if (students !== null)
      setDeleteStudent(students.filter((value) => value.id === studentId));
  }, [students, studentId]);

  return (
    <>
      <div className="flex place-items-center justify-center mt-12 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Student Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Student Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Identification Number"
            >
              Identification Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="J31s/..../...."
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
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
        <form className="w-full  max-w-lg ml-24">
          <div className="flex   mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Student Id
              </label>
              <input
                onChange={(event) => setStudentId(event.target.value)}
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
                    if (deleteStudent.length === 0) {
                      notifyDeleteError();
                      return;
                    }
                    axios
                      .delete(`${prefix}/student/${deleteStudent[0].id}`)
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
