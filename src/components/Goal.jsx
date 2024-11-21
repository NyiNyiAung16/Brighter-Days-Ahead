import { useState } from "react";
import TrashIcon from "./TrashIcon";
import { deleteGoal, updateGoal } from "../helpers/goals";
import useGoal from "../helpers/useGoal";
import { toast } from "react-toastify";
import { useAuth } from "../helpers/useAuth";
import DotsIcon from "./DotsIcon";
import EditIcon from "./EditIcon";

export default function Goal({ goal }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [body, setBody] = useState(goal.body || "");
  const [isProcessing, setIsProcessing] = useState(false);

  const goalContext = useGoal();
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;

  const handleOnChange = async (completed) => {
    try {
      const updatedGoals = goalContext?.goals.map((preGoal) => {
        if (preGoal === goal) {
          return { ...preGoal, completed };
        }
        return preGoal;
      });

      goalContext?.setGoals(updatedGoals);
      await updateGoal(goal.id, { ...goal, completed });
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  const handleTrash = async (e) => {
    e.stopPropagation();

    if (goal.user.id !== userId && isProcessing) return;
    setIsProcessing(true);

    try {
      goalContext?.setGoals((prevGoals) =>
        prevGoals.filter((prevGoal) => prevGoal.id !== goal.id)
      );

      await deleteGoal(goal.id);
      toast.success("Goal deleted successfully.", { autoClose: 2000 });
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (goal.user.id !== userId) return;

    try {
      await updateGoal(goal.id, { ...goal, body });

      goalContext?.setGoals((prevGoals) =>
        prevGoals.map((prevGoal) => {
          if (prevGoal.id === goal.id) {
            prevGoal.body = body;
            return prevGoal;
          }
          return prevGoal;
        })
      );
      toast.success("Goal updated successfully.", { autoClose: 2000 });
      setShowUpdate(false);
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  const handleDoubleClick = (e) => {
    if (goal.user.id !== userId) return;
    setShowUpdate(true);
  };

  return (
    <div className="flex items-center bg-gray-50 bg-opacity-30 rounded relative group hover:shadow-sm">
      <div className="p-3">
        <input
          type="checkbox"
          checked={goal.completed}
          onChange={() => handleOnChange(!goal.completed)}
          className="w-4 h-4 checkbox checkbox-info"
        />
      </div>

      {!showUpdate && (
        <div onDoubleClick={handleDoubleClick} className="relative w-full">
          <p className={`${goal.completed ? "line-through" : ""}`}>
            {goal.body}
          </p>
          {goal.user.id === userId && (
            <div className="dropdown absolute top-0 right-4 cursor-pointer">
              <div tabIndex={0} role="button">
                <DotsIcon />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content w-max rounded-box z-[1] p-2 shadow"
              >
                <li className="p-1">
                  <EditIcon onClick={() => setShowUpdate(true)}  className="hover:scale-105 duration-150" />
                </li>
                <li className="p-1">
                  <TrashIcon onClick={handleTrash} className="hover:scale-105 duration-150" />
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {showUpdate && (
        <form className="w-full" onSubmit={handleEdit}>
          <input
            type="text"
            value={body}
            onInput={(e) => setBody(e.target.value)}
            onBlur={() => setShowUpdate(false)}
            className="w-full bg-gray-50 bg-opacity-30 outline-none p-3"
          />
        </form>
      )}
    </div>
  );
}
