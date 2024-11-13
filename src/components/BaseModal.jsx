
export default function BaseModal({ children,title, id }) {
  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
            <h3 className="text-3xl text-center font-semibold text-gray-100 mb-5">
              {title}
            </h3>

            { children }
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
