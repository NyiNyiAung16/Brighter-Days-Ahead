import { useState } from "react";
import Actions from "../components/Actions";
import useComment from "../helpers/useComment";
import { deleteComment, updateComment } from "../helpers/comments";
import { useUser } from "../helpers/useAuth";
import { toast } from "react-toastify";

export default function Comment({ comment }) {
  const [show, setShow] = useState(false);
  const [body, setBody] = useState(comment.body || "");

  const commentContext = useComment();
  const user = useUser();

  const handleUpdateComment = async (e) => {
    e.preventDefault();
    try {
      if (comment.user.id !== user.id) return;

      await updateComment(comment.id, { body });
      commentContext?.setComments((prevComments) =>
        prevComments.map((prevComment) =>
          prevComment.id === comment.id ? { ...prevComment, body } : prevComment
        )
      );
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    } finally {
      setShow(false);
    }
  };

  const handleDelete = async (comment) => {
    try {
      if (comment.user.id !== user.id) return;

      await deleteComment(comment.id);
      commentContext?.setComments((prevComments) =>
        prevComments.filter((prevComment) => prevComment.id !== comment.id)
      );
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  return (
    <div className="bg-gray-50 bg-opacity-30 p-3 rounded space-y-3 relative group">
      <div className="flex items-center justify-between relative">
        <h3 className="font-semibold capitalize">{comment.user.name}</h3>
        {comment.user.id === user.id && (
          <Actions
            onDelete={() => handleDelete(comment)}
            onEdit={() => setShow(true)}
          />
        )}
      </div>
      {!show && <p>{comment.body}</p>}

      {show && (
        <form className="w-full" onSubmit={handleUpdateComment}>
          <input
            type="text"
            value={body}
            onInput={(e) => setBody(e.target.value)}
            onBlur={() => setShow(false)}
            className="w-full bg-gray-50 bg-opacity-30 outline-none border-info p-3"
          />
        </form>
      )}
    </div>
  );
}
