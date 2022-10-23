import hands from "../../Pictures/hands2.png";

import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();
  return (
    <div className="pl-2 lg:fixed">
      <section className="bg-scroll bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About Us 🤷
          </h1>
          <p className="text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-900">
            We offer a secure voting tool that allows voters to exercise their
            voting rights. Here, we offer high-quality, security, accessibity
            and transparency at its core. We protect the integrity of your vote
            by preventing voters from being able to vote multiple times.
          </p>
        </div>
      </section>
      <div className="relative px-20 md:px-40">
        <Element
          name="test7"
          className="h-32 md:h-96 relative overflow-scroll"
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
                  <h3 className="flex items-center left-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    ✪ Step One
                  </h3>

                  <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
                    Click on to the GET STARTED button then create an account by
                    filling the form that has been provided.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <h3 className="flex items-center left-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    ✪ Step Two
                  </h3>

                  <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
                    After you have registered successfully, click on the LOGIN
                    button, input your details to have access to the voting
                    platform.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <h3 className="flex items-center left-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    ✪ Step Three
                  </h3>

                  <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
                    You can then choose to vote for your desired contestant if
                    there is any voting that is on going . You can also apply to
                    be a contestant on your user profile by clicking on the
                    profile icon on the top-right of the navigation bar.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <h3 className="flex items-center left-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    ✪ Step Four
                  </h3>

                  <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
                    If there is an ongoing voting process and you have chosen to
                    vote for a contestant you are required to click the submit
                    button.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <h3 className="flex items-center left-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    ✪ Step Five
                  </h3>

                  <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
                    Logout from the platform by clicking on the LOGOUTbutton on
                    the navigation bar.
                  </p>
                </li>
              </ol>
            </section>
          </Element>
        </Element>
      </div>
      <span
        className="text-gray-900 bg-blue-200 hover:bg-blue-500 rounded-md p-2 text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        ❮❮❮ Back
      </span>
    </div>
  );
}
