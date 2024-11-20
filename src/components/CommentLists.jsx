import useComment from "../helpers/useComment";
import Comment from "./Comment";

export default function CommentLists() {
    const commentContext = useComment();

    return (
        <div className="flex flex-col gap-y-3 py-6">
            {commentContext?.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    ) 
}