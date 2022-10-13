import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Login from "./Pages/Login/Index";
import Voting from "./Pages/Voting/Index";
import { useEffect, useState } from "react";
import logo from "./Assets/Logo.png";
import contestants from "./contestants";
import Card from "./Pages/Voting/card";


const contestantObj = contestants.reduce((accumulator, currentValue) => {
  // destructring the current value 
  const { name } = currentValue;
  return { ...accumulator, [name]: currentValue };
}, {});

function App() {
  const location = useLocation();
  const [path, setpath] = useState(location.pathname);

// spliting of the Url to get the username
  let temp = path.split("/");
  let userName = temp[temp.length - 1];

  useEffect(() => {
    function updatepath() {
      setpath(location.pathname);
    }
    updatepath();
  }, [location]);

  return (
    <>
      {path === "/" ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <Link to="/Home" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Kenyatta University Autonomous Voting System
                </span>
              </Link>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to="/Home"
                      className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Voting"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Voting Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div className="sm:px-4 py-2.5 px-2">
                    <Login />
                  </div>
                }
              ></Route>
              <Route
                exact
                path="/Home"
                element={
                  <div className="sm:px-4 py-2.5 px-2">
                    <Home />
                  </div>
                }
              ></Route>
              <Route
                exact
                path="/Voting"
                element={
                  <div className="sm:px-4 py-2.5 px-2">
                    <Voting />
                  </div>
                }
              ></Route> 

              {/* The users username is used to render their details  */}
              <Route
                exact
                path={`/Voting/${userName}`}
                element={
                  <div className="sm:px-4 py-2.5 px-2">
                    <Card person={contestantObj[userName]} />
                  </div>
                }
              ></Route>

              <Route exact path="*" element={`Error 404`}></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
