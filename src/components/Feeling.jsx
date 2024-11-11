import { Link } from "react-router-dom";

export default function Feeling({ feeling }) {
    return (
        <Link to={`/feelings/${feeling.id}`}>
            <blockquote>
                { feeling.text }
                <span>{ feeling.username }</span>
            </blockquote>
        </Link>
    )
}