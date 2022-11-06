import land from "../../Assets/land.svg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
        <>
          
          <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="text-gray-700 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                  Voting system for Kenyatta University
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  This is an online software platform that allows groups to
                  securely conduct votes and elections. It offers the overall
                  requirements of a voting event.
                </p>

                <button
                  className="inline-flex mr-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  type="button"
                  data-modal-toggle="authentication-modal"
                  onClick={() => navigate("/login")}
                >
                  Get started
                </button>
                <a
                  href="/aboutus"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  About us
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={land} alt="" />
              </div>
            </div>
          </section>
        </>
     
  );
}
