export default function Card({ contestant }) {
  return (
    <>
      <div className="flex place-items-center justify-center flex-row  py-6 mt-16">
        <div className="h-96 max-h-full w-96 max-w-full rounded overflow-hidden shadow-lg">
          <img className="w-full h-48" src={`${contestant?.image}`} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {contestant?.student?.user?.name}
            </div>
            for
            <p className="text-gray-700 text-base">
              {`${contestant?.position}`}
            </p>
            <p className="text-gray-700 text-base">
              {`${contestant?.description}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
