import { useState } from "react";
import { goalValidation } from "../helpers/validation";
import { setGoal } from "../helpers/goals";

export default function SetGoal() {
    const [body,setBody] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { errors, data } = goalValidation({ body, completed });
        
        if(errors) {
          setError(errors);
          setTimeout(() => {
            setError(null);
          }, 2000);
        } else {
          console.log(data);
          await setGoal({ body, completed });
          setBody("");
          setCompleted(false);
        }


    }

  return (
    <form className="w-full pt-10 flex gap-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Set Goal here"
        className={`input input-bordered input-info bg-gray-100 bg-opacity-10 w-full ${error?.body && "input-error border-2"}`}
        value={body}
        onInput={(e) => setBody(e.target.value)}
      />
      <button className="btn btn-outline btn-info">Set Goal</button>
    </form>
  );
}
