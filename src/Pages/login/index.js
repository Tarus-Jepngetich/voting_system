import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { useUser } from "../../context";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import axios from "axios";

export default function Login() {
  const { addUser } = useUser();

  const [loginUser, setLoginUser] = useState({
    userId: "",
    passwordHash: "",
  });
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const prefix = useUrlPrefix();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (user) {
      addUser(user);
    }
  }, [user]);

  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
              <label>
                    <b>User Identification Number</b>
                  </label>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="J31s/****/****"
                    onChange={({ target: { value } }) => {
                      setLoginUser({ ...loginUser, userId: value });
                    }}
                  />
                </div>
                <label>
                    <b>Password</b>
                  </label>
                <div className="mb-6">
                 
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="********"
                    onChange={({ target: { value } }) => {
                      setLoginUser({ ...loginUser, passwordHash: value });
                      setIsDisabled(false);
                    }}
                  />
                </div>

                <div className="text-center flex flex-col">
                  {!isLoading && error && (
                    <span className="text-red-600 text-center">
                      Your details are not correct
                    </span>
                  )}
                  <button
                    type="button"
                    disabled={isDisabled}
                    className={`${
                      isDisabled && "cursor-not-allowed"
                    } px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
                    onClick={() => {
                      setIsLoading(true);

                      axios
                        .post(`${prefix}/user/login`, loginUser)
                        .then((res) => {
                          setError(false);
                          setUser(res.data);
                          localStorage.setItem("jwt", JSON.stringify(res.data));
                          navigate("/home");
                          window.location.reload();
                        })
                        .catch((err) => {
                          setError(true);
                        });
                      setIsLoading(false);
                    }}
                  >
                    {isLoading && <Loader size="sm" />}
                    Login
                  </button>

                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a
                      href="/Register"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
