import { useNavigate } from "react-router-dom";
import mine from "../../Assets/mine.png";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCurrentStudent } from "../../hooks/useCurrentStudent";
import { useCurrentContestant } from "../../hooks/useCurrentContestant";
import { useEffect, useState } from "react";

export default function User() {
  const { name, isAdmin } = useCurrentUser();
  const student = useCurrentStudent();
  const [isStudent, setIsStudent] = useState();
  const [isContestant, setIsContestant] = useState();

  const contestant = useCurrentContestant(student.id);

  useEffect(() => {
    setIsStudent(student.isStudent);
  }, [student]);

  useEffect(() => {
    setIsContestant(contestant.isContestant);
  }, [contestant]);

  const navigate = useNavigate();

  return (
    <>
      <main className="profile-page ">
        <section className="relative block h-72">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: `translateZ(0px)` }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200 h-50">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative flex justify-center">
                      <img
                        alt="..."
                        src={mine}
                        className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-2 ">
                      <button
                        onClick={
                          isAdmin
                            ? () => navigate("/Admin")
                            : isStudent && !isContestant
                            ? () => navigate("/ContestantForm")
                            : isStudent && isContestant
                            ? () => navigate("/user")
                            : () => navigate("/student")
                        }
                        className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none  sm:float-right px-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        {isAdmin
                          ? "Connect to Admin panel"
                          : isStudent && !isContestant
                          ? "Enroll as contestant"
                          : isStudent && isContestant
                          ? ""
                          : "Enroll as student"}
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8 sm:hidden">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span>
                        <span className="text-sm text-blueGray-400"></span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span>
                        <span className="text-sm text-blueGray-400"></span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span>
                        <span className="text-sm text-blueGray-400"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-16">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {student?.school?.name}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        You can register as a contestant if you want to be
                        elected for a post.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1"></div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
