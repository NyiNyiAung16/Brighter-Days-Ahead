import { Link } from "react-router-dom";

export default function Feeling({ feeling }) {
    return (
        <Link to={`/feelings/${feeling.id}`}>
            <blockquote className="break-words">
                {feeling.text}
                <span>{feeling.username}</span>
            </blockquote>
        </Link>
    )
}