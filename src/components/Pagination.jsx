export default function Pagination({ defaultPage ,pages, onClick }) {
  return (
    <div className="join">
      {pages && pages.map((page) => (
        <input
          key={page}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={page}
          defaultChecked={defaultPage === page}
          onClick={() => onClick(page)}
        />
      ) )}
    </div>
  );
}
