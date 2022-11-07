import { useNavigate } from "react-router-dom";
import page from "../../Assets/page.png";

export default function ContestantForm() {
  const navigate = useNavigate();
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
          <div className="relative bg-cyan-200 rounded-lg shadow dark:bg-gray-700">
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
                  clip-rule="evenodd"
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
                <label
                  for="RegNo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Idenification Number
                </label>
                <input
                  id="RegNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="J31S/..../...."
                  required=""
                />
                <label
                  for="Name"
                  className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Names
                </label>
                <input
                  id="RegNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Jane Doe"
                  required=""
                />
                <label
                  for="School"
                  className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  School
                </label>
                <input
                  id="RegNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="School of..."
                  required=""
                />

                <label
                  class="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  for="file_input"
                >
                  Upload Photo
                </label>
                <input
                  class="block w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                />

                <label
                  for="message"
                  className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  rows="2"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write a short description about your agenda and, or yourself"
                  required=""
                ></textarea>

                <button
                  type="submit"
                  className="w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>

                <button
                  id="dropdownCheckboxButton"
                  data-dropdown-toggle="dropdownDefaultCheckbox"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown checkbox{" "}
                  <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownDefaultCheckbox"
                  class="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownCheckboxButton"
                  >
                    <li>
                      <div class="flex items-center">
                        <input
                          id="checkbox-item-1"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="checkbox-item-1"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Default checkbox
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center">
                        <input
                          checked
                          id="checkbox-item-2"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="checkbox-item-2"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Checked state
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center">
                        <input
                          id="checkbox-item-3"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="checkbox-item-3"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Default checkbox
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
