import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Voting from "./Pages/Voting";
import { useEffect, useState } from "react";
import image5 from "./Assets/Logo.png";
import profile from "./Assets/profile.png";
import Card from "./Pages/Voting/card";
import Navbar from "./components/Layout/navbar";
import LandingPage from "./Pages/LandingPage";
import { useNavigate } from "react-router-dom";
import User from "./Pages/user";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import { useUser } from "./context";
import Error from "./Pages/error";
import ContestantForm from "./Pages/ContestantForm";
import Admin, {
  EditContestant,
  EditSchool,
  EditStudent,
  EditUser,
} from "./Pages/Admin";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useAllContestants } from "./hooks/useAllContestants";
import StudentForm from "./Pages/StudentForm/Index";

function App() {
  const { addUser } = useUser();
  const { userId } = useLocalStorage();
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setpath] = useState(location.pathname);
  const { isAdmin } = useCurrentUser();
  const contestants = useAllContestants();

  // spliting of the Url to get the username
  let temp = path.split("/");
  let contestantId = temp[temp.length - 1];

  useEffect(() => {
    function updatepath() {
      setpath(location.pathname);
    }
    updatepath();
  }, [location]);

  const _contestants =
    contestants !== null &&
    contestants.reduce((acc, currentValue) => {
      const { id } = currentValue;
      return { ...acc, [id]: currentValue };
    }, {});

  return (
    <>
      {path === "/Register" ? (
        <>
          <Register />
        </>
      ) : path === "/" ? (
        <>
          <LandingPage />
        </>
      ) : path === "/aboutus" ? (
        <>
          <Aboutus />
        </>
      ) : path === "/login" ? (
        <>
          {" "}
          <Login />{" "}
        </>
      ) : (
        <>
          {userId !== "" && (
            <Navbar image5={image5}>
              <ul className="flex flex-col place-items-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                    Vote
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={() => {
                      addUser({});
                      localStorage.removeItem("jwt");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Link>
                </li>

                <div
                  onClick={() => {
                    navigate("/user");
                  }}
                >
                  <img
                    className="p-1 w-sm:w-10 sm:h-10 h-5 rounded-full ring-2 ring-cyan-300 dark:ring-blue-500"
                    src={profile}
                    alt=""
                  />
                </div>
              </ul>
            </Navbar>
          )}

          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div className="sm:px-4 py-2.5 px-2">
                    <LandingPage />
                  </div>
                }
              ></Route>

              {userId !== "" ? (
                <>
                  <Route
                    exact
                    path="/Home"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <Home />
                      </div>
                    }
                  ></Route>

                  {isAdmin && (
                    <Route
                      exact
                      path="/Admin"
                      element={
                        <div className="sm:px-4 py-2.5 px-2">
                          <Admin />
                        </div>
                      }
                    ></Route>
                  )}

                  <Route
                    exact
                    path="/ContestantForm"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <ContestantForm />
                      </div>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/StudentForm"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <StudentForm />
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
                  <Route
                    exact
                    path="/user"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <User />
                      </div>
                    }
                  ></Route>

                  {isAdmin && (
                    <Route
                      exact
                      path="/EditContestant"
                      element={
                        <div className="sm:px-4 py-2.5 px-2">
                          <EditContestant />
                        </div>
                      }
                    ></Route>
                  )}
                  {isAdmin && (
                    <Route
                      exact
                      path="/EditSchool"
                      element={
                        <div className="sm:px-4 py-2.5 px-2">
                          <EditSchool />
                        </div>
                      }
                    ></Route>
                  )}
                  {isAdmin && (
                    <Route
                      exact
                      path="/EditStudent"
                      element={
                        <div className="sm:px-4 py-2.5 px-2">
                          <EditStudent />
                        </div>
                      }
                    ></Route>
                  )}
                  {isAdmin && (
                    <Route
                      exact
                      path="/EditUser"
                      element={
                        <div className="sm:px-4 py-2.5 px-2">
                          <EditUser />
                        </div>
                      }
                    ></Route>
                  )}

                  <Route
                    exact
                    path={`/Voting/${contestantId}`}
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <Card contestant={_contestants[contestantId]} />
                      </div>
                    }
                  ></Route>
                </>
              ) : (
                <>
                  <Route
                    exact
                    path="/Home"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>

                  <Route
                    exact
                    path="/Admin"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>

                  <Route
                    exact
                    path="/ContestantForm"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/StudentForm"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>

                  <Route
                    exact
                    path="/Voting"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>

                  <Route
                    exact
                    path="/EditStudent"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/EditContestant"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/EditUser"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/EditSchool"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>

                  <Route
                    exact
                    path="/user"
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>

                  <Route
                    exact
                    path={`/Voting/${contestantId}`}
                    element={
                      <div className="sm:px-4 py-2.5 px-2">
                        <LandingPage />
                      </div>
                    }
                  ></Route>
                </>
              )}

              <Route
                exact
                path="*"
                element={
                  <div className="sm:px-4 py-2.5 px-2">
                    <Error />
                  </div>
                }
              ></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
