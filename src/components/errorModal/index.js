import { useNavigate } from "react-router-dom";

export default function ErrorModal({
  isHidden,
  setIsHidden,
  children,
  setError,
  error,
}) {
  const navigate = useNavigate();

  const message = error ? "unsuccessful" : "successful";
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        className={`${
          isHidden && "hidden"
        } h-screen overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
      >
        <div className="relative p-4 w-96 max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-red-900 dark:text-white">
                Creation of Account {message}
              </h3>
              
            </div>

            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">{children}</div>

            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Proceed to login
              </button>
              <button
                data-modal-toggle="defaultModal"
                onClick={() => {
                  setIsHidden(true);
                  setError(false);
                  window.location.reload();
                }}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
