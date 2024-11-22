import { useEffect, useState } from "react";
import PresentBoxIcon from "./PresentBoxIcon";
import { toast } from "react-toastify";
import {
  getLastSupriseDate,
  setLastSupriseDate,
} from "../helpers/lastSupriseBoxDate";
import { useUser } from "../helpers/useAuth";
import { getRandomFeeling } from '../helpers/feelings'

export default function MotivateMessageModal() {
  const [showIcon, setShowIcon] = useState(false);
  const [feeling, setFeeling] = useState({});

  const user = useUser();
  const userId = user?.id;

  useEffect(() => {
    const fetch = async () => {
      if(!userId) return;

      try {
        const today = new Date().toDateString();
        const lastSupriseDate = await getLastSupriseDate(userId);
        const data = await getRandomFeeling();
        setFeeling(data);

        if (lastSupriseDate !== today) {
          setShowIcon(true);
        }
      } catch (error) {
        toast.error(error.message, { autoClose: 2000 });
      }
    };
    fetch();
  },[userId]);

  const handleShowModal = async () => {
    try {
      document.getElementById("motivateMsgModal").showModal();

      const today = new Date().toDateString();
      await setLastSupriseDate(userId, today);

      setShowIcon(false);
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  return (
    <>
      {showIcon && (
        <div
          className="fixed right-5 bottom-5 animate-bounce"
          onClick={handleShowModal}
        >
          <PresentBoxIcon />
        </div>
      )}
      <dialog id="motivateMsgModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost text-gray-600 absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-gray-200">
            🌅 Brighter Days Ahead
          </h3>
          <p className="py-2 text-gray-300">
            {feeling.text} 💫
          </p>
          <p className="text-gray-400 text-end mt-2">
            Message by <span className="font-semibold">{feeling.user?.name}</span> 💙
          </p>
        </div>
      </dialog>
    </>
  );
}
