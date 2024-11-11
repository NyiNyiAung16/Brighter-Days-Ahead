import { useState } from "react";

export default function SetGoal({ setGoals }) {
    const [body,setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!body.trim() && Number(body.trim().length) === 0) return;

        setGoals((goal) => [{ body, completed: false }, ...goal]);
        setBody("");
    }

  return (
    <form className="w-full pt-10 flex gap-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Set Goal here"
        className="input input-bordered input-info bg-gray-100 bg-opacity-10 w-full"
        value={body}
        onInput={(e) => setBody(e.target.value)}
      />
      <button className="btn btn-outline btn-info">Set Goal</button>
    </form>
  );
}
