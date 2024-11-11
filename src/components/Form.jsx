import { useState } from "react";
import ArrowUp from "./ArrowUp";

export default function FeelingForm({ onHandleSubmit, title, placeholder }) {
  const [body, setBody] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!body.trim() && body.trim().length === 0) return;
    
    onHandleSubmit(body);
    setBody('');
  };

  return (
    <div>
      <form className="max-w-md mx-auto space-y-3" onSubmit={handleSubmit}>
        <div
          className="btn btn-outline btn-info px-6"
          onClick={() => setShow(!show)}
        >
          {title}
          <ArrowUp active={show} />
        </div>
        {show && (
          <div>
            <textarea
              className="w-full textarea bg-gray-50 bg-opacity-10 textarea-info"
              placeholder={placeholder}
              value={body}
              onInput={(e) => setBody(e.target.value)}
            ></textarea>
            <button className="btn btn-outline btn-sm btn-info" type="submit">
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
