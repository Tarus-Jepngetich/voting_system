import { useState } from "react";

export default function School() {
  const schools = ["SET", "SOE", "SPASS"];

  const [school, setSchool] = useState({
    schoolId: "",
    name: "",
  });

  return (
    <>
      <div className="flex place-items-center justify-center mt-12">
        <form className="w-full max-w-lg">
          <div className="flex   flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                School Id
              </label>
              <input
                onChange={(event) =>
                  setSchool({ ...school, schoolId: event.target.value })
                }
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                School Name
              </label>

              <input
                onChange={(event) =>
                  setSchool({ ...school, name: event.target.value })
                }
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              Submit
            </button>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                School
              </label>

              <div className="relative flex">
                <select
                  className="block mr-24 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  {schools.map((value, i) => (
                    <option key={i}> {value}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
