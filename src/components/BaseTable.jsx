export default function BaseTable({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        { children }
      </table>
    </div>
  );
}
