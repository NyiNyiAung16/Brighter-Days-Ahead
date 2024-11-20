import { useState } from "react";
import TrashIcon from "../components/TrashIcon";
import useComment from "../helpers/useComment";
import { deleteComment, updateComment } from "../helpers/comments";

export default function Comment({ comment }) {
  const [show, setShow] = useState(false);
  const [body, setBody] = useState(comment.body || "");

  const commentContext = useComment();

  const handleUpdateComment = async (e) => {
    e.preventDefault();

    await updateComment(comment.id, { body });

    commentContext?.setComments((prevComments) =>
      prevComments.map((prevComment) =>
        prevComment.id === comment.id ? { ...prevComment, body } : prevComment
      )
    );

    setShow(false);
  };


  const handleDelete = async (comment) => {
    await deleteComment(comment.id);

    commentContext?.setComments((prevComments) =>
      prevComments.filter((prevComment) => prevComment.id !== comment.id)
    );
  }

  return (
    <div className="bg-gray-50 bg-opacity-30 p-3 rounded space-y-3 group">
      <div className="flex items-center justify-between relative">
        <h3 className="font-semibold capitalize">{comment.user.name}</h3>
        <TrashIcon
          className={
            "hidden absolute right-0 hover:scale-105 duration-200 cursor-pointer group-hover:block"
          }
          onClick={() => handleDelete(comment)}
        />
      </div>
      {!show && <p onDoubleClick={() => setShow(true)}>{comment.body}</p>}

      {show && (
        <form className="w-full" onSubmit={handleUpdateComment}>
          <input
            type="text"
            value={body}
            onInput={(e) => setBody(e.target.value)}
            onBlur={(e) => setShow(false)}
            className="w-full bg-gray-50 bg-opacity-30 outline-none border-info p-3"
          />
        </form>
      )}
    </div>
  );
}
