import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import page from "../../Assets/page.png";
import { useAllSchools } from "../../hooks/useAllSchools";
import { useCurrentStudent } from "../../hooks/useCurrentStudent";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import { toast } from "react-toastify";
import Toastify from "../../components/toastify";

const positions = ["Congressperson", "Male Delegate", "Female Delegate"];

export default function ContestantForm() {
  const formData = new FormData();
  const schools = useAllSchools();
  const student = useCurrentStudent();
  const [image, setImage] = useState(null);
  const [contestant, setContestant] = useState({
    student: "",
    position: "",
    description: "",
  });
  const prefix = useUrlPrefix();
  const navigate = useNavigate();

  const notifyError = () => toast("Operation Failed");
  const notifySuccess = () => toast("Operation successful");

  return (
    <>
      <div
        className="grid place-items-center h-screen w-full "
        style={{
          backgroundImage: `url(${page})`,
          backgroundPosition: "center",
          // opacity:"50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
              <form className="space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Idenification Number
                  </label>
                  <input
                    value={student.user && student.user.userId}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="J31S/..../...."
                    required=""
                  />
                  <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Names
                  </label>
                  <input
                    value={student.user && student.user.name}
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
                          value={student.school?.schoolId}
                          className="block mr-24 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>default</option>
                          {schools !== null &&
                            schools.map((value, i) => (
                              <option key={i}> {value.schoolId}</option>
                            ))}
                        </select>
                      </div>
                      <select
                        onChange={(e) => {
                          setContestant({
                            ...contestant,
                            student: student.id,
                            position: e.target.value,
                          });
                        }}
                        className="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option>default</option>
                        {positions.map((value, i) => (
                          <option key={i}> {value}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Upload Photo
                  </label>
                  <input
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    className="block w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />

                  <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Description
                  </label>
                  <textarea
                    onChange={(e) => {
                      setContestant({
                        ...contestant,
                        description: e.target.value,
                      });
                    }}
                    id="message"
                    rows="2"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write a short description about your agenda and, or yourself"
                    required=""
                  ></textarea>
                  <Toastify>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        formData.append("image", image);
                        formData.append("description", contestant.description);
                        formData.append("position", contestant.position);
                        formData.append("student", contestant.student);

                        axios
                          .post(`${prefix}/contestant`, formData, {
                            headers: { "Content-Type": "multipart/form-data" },
                          })
                          .then(() => notifySuccess())
                          .catch((err) => {
                            notifyError();
                            console.error(err);
                          });
                      }}
                      type="submit"
                      className="w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </Toastify>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
