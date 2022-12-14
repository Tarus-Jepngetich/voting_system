import { useEffect, useState } from "react";
import inspo from "../../Assets/Inspiration.gif";
import logo from "../../Assets/Logo.png";
import { useUrlPrefix } from "../../hooks/useUrlPrefix";
import Loader from "../../components/loader";
import axios from "axios";
import Toastify from "../../components/toastify";
import { toast } from "react-toastify";

export default function Register() {
  const notifyError = () =>
    toast("Account creation was unsuccessful! Try again");
  const notifySuccess = () =>
    toast("Your account is created successfully! Proceed to login page");

  const [registerUser, setRegisterUser] = useState({
    name: "",
    userId: "",
    passwordHash: "",
    confirmPasswordHash: "",
  });

  const prefix = useUrlPrefix();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      registerUser.passwordHash !== "" &&
      registerUser.confirmPasswordHash !== "" &&
      registerUser.passwordHash === registerUser.confirmPasswordHash
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [registerUser]);

  const correctUserId = (userId) => {
    const arr = userId.split("/");
    return arr.length === 3;
  };

  return (
    <>
      <div className="grid grid-cols-1 h-screen w-full">
        <section className="flex place-items-center justify-center bg-gradient-to-r from-pink-400 to-cyan-200 dark:bg-gray-900">
          <div className="hidden md:block ">
            <img className="w-full h-screen object-cover" src={inspo} alt="" />
          </div>
          <div className="flex flex-col place-items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="/"
              className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
              Kenyatta University Autonomous Voting system
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Jane Doe"
                      required={true}
                      onChange={(e) => {
                        setRegisterUser({
                          ...registerUser,
                          name: e.target.value.trim(),
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      User Idenification Number
                    </label>
                    <input
                      id="RegNo"
                      className="bg-gray-50 border border-gray-300 mb-3 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="J31S/..../...."
                      required={true}
                      onChange={(e) => {
                        setRegisterUser({
                          ...registerUser,
                          userId: e.target.value.trim(),
                        });
                      }}
                    />
                    {registerUser.userId !== "" &&
                      !correctUserId(registerUser.userId) && (
                        <span className="w-full text-center p-3 bg-yellow-100 text-yellow-900 rounded-lg">
                          "Enter Correct Format of User Id"
                        </span>
                      )}
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="????????????????????????"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                      onChange={(e) => {
                        setRegisterUser({
                          ...registerUser,
                          passwordHash: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="????????????????????????"
                      className="bg-gray-50 border mb-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                      onChange={(e) => {
                        setRegisterUser({
                          ...registerUser,
                          confirmPasswordHash: e.target.value,
                        });
                      }}
                    />
                  </div>
                  {registerUser.userId !== "" &&
                    registerUser.passwordHash !== "" &&
                    registerUser.confirmPasswordHash !== "" &&
                    registerUser.name !== "" &&
                    isDisabled && (
                      <span className="w-full text-center p-3 bg-yellow-100 text-yellow-900">
                        The password is not matching!!{" "}
                      </span>
                    )}
                  <Toastify error={error}>
                    <button
                      type="submit"
                      disabled={isDisabled}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        setError(false);
                        axios
                          .post(`${prefix}/user/register`, registerUser)
                          .then((response) => {
                            notifySuccess();
                          })
                          .catch((err) => {
                            setError(true);
                            notifyError();
                          });
                        setIsLoading(false);
                      }}
                      className={`${
                        isDisabled && "cursor-not-allowed"
                      }	w-full text-white bg-primary-600 bg-blue-400 hover:bg-cyan-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                    >
                      {isLoading && <Loader />}
                      Create an account
                    </button>
                  </Toastify>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-medium text-primary-600 hover:underline text-cyan-400 dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
