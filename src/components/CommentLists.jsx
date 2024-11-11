import Comment from "./Comment";

export default function CommentLists({ comments }) {
    return (
        <div className="flex flex-col gap-y-3 py-6">
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    ) 
}