const SIZES = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export default function Loader({ size = "md" }) {
  return (
    <>
      <div className={`sk-fading-circle ${SIZES[size]}`}>
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <div
              key={`dot-${index}`}
              className={`sk-circle${index + 1} sk-circle`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
