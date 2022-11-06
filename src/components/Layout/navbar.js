import { useState } from "react";

export default function Navbar({ children, image5 }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex justify-between items-center mx-auto">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/home" className="flex items-center">
              <img src={image5} className="mr-3 h-6 sm:h-9" alt="" />
              <span className="self-center text-sm sm:text-xl font-semibold whitespace-nowrap dark:text-white">
                Kenyatta University Autonomous Voting System
              </span>
            </a>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsNavbarOpen(!isNavbarOpen);
              }}
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
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={
              isNavbarOpen
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            {children}
          </div>
        </div>
      </nav>
    </>
  );
}
