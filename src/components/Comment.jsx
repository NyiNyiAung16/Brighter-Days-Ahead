import { useState } from "react";
import TrashIcon from "../components/TrashIcon";

export default function Comment({ comment }) {
  const [show, setShow] = useState(false);
  const [body,setBody] = useState(comment.body || '');


  const handleUpdateComment = (e) => {
    e.preventDefault();

    setShow(false);
  }

  return (
    <div className="bg-gray-50 bg-opacity-30 p-3 rounded space-y-3 group">
      <div className="flex items-center justify-between relative">
        <h3 className="font-semibold capitalize">{comment.username}</h3>
        <TrashIcon
          className={
            "hidden absolute right-0 hover:scale-105 duration-200 cursor-pointer group-hover:block"
          }
        />
      </div>
      {!show && <p onDoubleClick={() => setShow(true)}>{comment.body}</p>}

      {show && (
        <form className="w-full" onSubmit={handleUpdateComment}>
          <input
            type="text"
            value={body}
            onInput={(e) => setBody(e.target.value)}
            className="w-full bg-gray-50 bg-opacity-30 outline-none border-info p-3"
          />
        </form>
      )}
    </div>
  );
}
