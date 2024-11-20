export default function BaseSkeleton({ title, limit, className }) {
  const skeletons = new Array(limit).fill(0);

  return (
    <>
      {skeletons &&
        skeletons.map((skeleton) => (
          <div key={skeleton} className={`skeleton ${className}`}></div>
        ))}
    </>
  );
}
