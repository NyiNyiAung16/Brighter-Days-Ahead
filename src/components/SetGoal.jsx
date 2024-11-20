import { useState } from "react";
import { goalValidation } from "../helpers/validation";
import { setGoal } from "../helpers/goals";
import Spinner from './Spinner'
import { toast } from "react-toastify";
import useGoal from "../helpers/useGoal";
import { useUser} from "../helpers/useAuth";

export default function SetGoal() {
    const [body,setBody] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const goalContext = useGoal();
    const user = useUser();

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        const { errors, data } = goalValidation({ body, completed });

        if (errors) {
          setError(errors);
          setTimeout(() => setError(null), 2000);
          return;
        }

        const newGoal = await setGoal({...data,user});
        goalContext?.setGoals((previousGoals) => [
          { id: newGoal.id, body: data.body, completed: data.completed, user },
          ...previousGoals,
        ]);
        toast.success('Goal set successfully.', { autoClose: 2000 });
        setBody("");
        setCompleted(false);
      } catch (err) {
        toast.error(err.message, { autoClose: 2000 });
      } finally {
        setIsLoading(false);
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
      <button className="btn btn-outline btn-info disabled:btn-outline" disabled={isLoading}>
        {isLoading ? <Spinner size="sm"/> : 'Set Goal'}
      </button>
    </form>
  );
}
