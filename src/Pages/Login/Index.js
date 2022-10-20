import { useNavigate } from "react-router-dom";
import inspo from "../../Assets/Inspiration.gif";
import logo from "../../Assets/Logo.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block ">
          <img className="w-full h-screen object-cover" src={inspo} alt="" />
        </div>

        <section className="flex place-items-center justify-center bg-gradient-to-r from-pink-200 to-cyan-200 dark:bg-gray-900">
        

          <div>
            <div className="flex place-items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-9 h-8 mr-2" src={logo} alt="" />
              Autonomous Voting System
            </div>
            <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-pink-800 dark:border-green-700">

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>

                <form
                  className=" space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={() => navigate("/Voting")}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <p className="">
                      Registration Number
                      </p>
                    </label>
                    <input
                      type=""
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="J31s/.../..."
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="grid place-items-center">
                    <button
                      className="bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-green-500  text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
