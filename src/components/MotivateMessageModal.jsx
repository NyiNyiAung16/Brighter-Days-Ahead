import { useState } from "react";
import PresentBoxIcon from "./PresentBoxIcon";

export default function MotivateMessageModal() {
  const [showIcon, setShowIcon] = useState(false);

  const handleShowModal = () => {
    document.getElementById("motivateMsgModal").showModal();

    setShowIcon(false);
  }


  return (
    <>
      {showIcon && <div
        className="fixed right-5 bottom-5 animate-bounce"
        onClick={handleShowModal}
      >
        <PresentBoxIcon />
      </div>}
      <dialog id="motivateMsgModal" className="modal">
        <div className="modal-box bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="font-bold text-lg text-gray-200">
            🌅 Brighter Days Ahead
          </h3>
          <p className="py-2 text-gray-300">
            You are allowed to rest, to take a pause, and to simply be. Embrace
            this time to relax and recharge. 💫
          </p>
          <p className="text-gray-400 text-end mt-2">
            Message by <span className="font-semibold">Mg Mg</span> 💙
          </p>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
