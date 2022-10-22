import hands from "../../Pictures/hand1.png";

import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();
  return (
    <div className="pl-2 fixed">
      <section className="bg-scroll bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About Us 🤷
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>
      <div className="relative px-40">
        <Element
          name="test7"
          className="h-96 relative overflow-scroll"
          id="containerElement"
          style={{
            backgroundImage: `url(${hands})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Element name="firstInsideContainer">
            <section className="absolute grid place-content-center justify-center">
              <ol className=" border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Application UI v2.0.0{" "}
                  </h3>

                  <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce
                    &amp; Marketing pages.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Figma v1.3.0
                  </h3>

                  <p className="text-base font-normal text-black dark:text-gray-400">
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.2.2
                  </h3>

                  <p className="text-base font-normal text-black dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </p>
                </li>
              </ol>
            </section>
          </Element>
        </Element>
      </div>
      <span
        className="bg-blue-200 hover:bg-blue-500 rounded-md p-2 text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        ❮❮❮ Back
      </span>
    </div>
  );
}
