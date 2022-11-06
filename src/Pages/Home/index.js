import React from "react";
import phone from "../../Assets/phone.png";

export default function Home() {
  return (
    <>
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute place-items-center h-1"></div>

      <div
        className="bg-white py-12"
        style={{
          backgroundImage: `url(${phone})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
              Welcome !
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-900 lg:mx-auto">
              We are excited to have you using our system. We hope you will
              enjoy the voting experience we have to offer.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"></div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Why Should I Vote?
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  Make your voice heard because every vote counts.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"></div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Importance of Voting.
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  It is one of the most important rights and responsibilities
                  that on has. Most voters do not usually vote and give up the
                  chance to choose leaders and representatives who make
                  decisions important to them.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"></div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    You have the right to...
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  Vote with privacy and confidentiality. It is advised that when
                  you open this platform to vote you do so when you are alone to
                  ensure your privacy.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
