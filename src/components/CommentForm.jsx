import { useState } from "react";
import ArrowUp from "./ArrowUp";
import BaseError from './BaseError';
import Spinner from "./Spinner";
import { commentValidation } from '../helpers/validation'
import { addComment } from '../helpers/comments'
import { useUser} from '../helpers/useAuth'
import { toast } from "react-toastify";
import useComment from '../helpers/useComment'

export default function CommentForm({ feelingId }) {
  const [body, setBody] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const user = useUser();

  const commentContext = useComment();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    
    const { errors } = commentValidation({ body });
    if(errors) {
      console.log(errors);
      setErrors(errors);
      setTimeout(() => {
        setErrors(null);
      }, 2000);
    } else {
      let res = await addComment({ body, user, feelingId });
      commentContext?.setComments((prevComments) => [ { id: res.id,body, user, feelingId }, ...prevComments ]);
      toast.success('Comment added successfully.',{ autoClose: 2000 });
      setBody('');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div
          className="btn btn-outline btn-info px-6"
          onClick={() => setShow(!show)}
        >
          Add Comment
          <ArrowUp active={show} />
        </div>
        {show && (
          <div>
            <textarea
              className="w-full min-h-[120px] textarea bg-gray-50 bg-opacity-10 textarea-info resize-none"
              placeholder="What are you thinking?"
              value={body}
              onInput={(e) => setBody(e.target.value)}
            ></textarea>
            { errors?.body && <BaseError message={errors.body.message}/>}
            <button className="btn btn-outline btn-sm btn-info" type="submit">
              {isLoading ? <Spinner size="sm"/> : "Submit"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
