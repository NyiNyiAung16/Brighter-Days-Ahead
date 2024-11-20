import { useContext } from "react";
import { CommentContext } from "../contexts/commentContext";

export default function useComment() {
    const context = useContext(CommentContext);
    return context;
}