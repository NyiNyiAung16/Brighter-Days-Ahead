import { useState } from "react";
import TrashIcon from "./TrashIcon";

export default function Goal({ goal, setGoals }) {
    const [showUpdate, setShowUpdate] = useState(false);
    const [body, setBody] = useState(goal.body || "");
  
    const handleOnChange = (completed) => {
      setGoals((pre) =>
        pre.map((preGoal) => {
          if (preGoal === goal) {
            preGoal.completed = completed;
            return preGoal;
          }
          return preGoal;
        })
      );
    };
  
    const handleTrash = (e) => {
      e.preventDefault();
  
      setGoals((prevGoals) =>
        prevGoals.filter((prevGoal) => prevGoal.id !== goal.id)
      );
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setGoals((prevGoals) =>
        prevGoals.map((prevGoal) => {
          if (prevGoal.id === goal.id) {
            prevGoal.body = body;
            return prevGoal;
          }
          return prevGoal;
        })
      );
      setShowUpdate(false);
    };
  
    const handleDoubleClick = () => {
      setShowUpdate(true);
    };
  
    return (
      <div className="flex items-center border-b border-info relative group">
        <div className="p-3">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={() => handleOnChange(!goal.completed)}
            className="w-4 h-4 "
          />
        </div>
  
        {!showUpdate && (
            <>
                <p
                    className={`border-l border-info p-3 ${
                    goal.completed ? "line-through" : ""
                    }`}
                    onDoubleClick={handleDoubleClick}
                >
                    {goal.body}
                </p>
                <TrashIcon
                    className={
                        "hidden absolute right-4 cursor-pointer hover:scale-105 duration-100 group-hover:block"
                    }
                    onClick={handleTrash}
                />
            </>
        )}
  
        {showUpdate && (
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              value={body}
              onInput={(e) => setBody(e.target.value)}
              className="w-full border-l bg-gray-50 bg-opacity-30 outline-none border-info p-3"
            />
          </form>
        )}
  
        
      </div>
    );
  }
  