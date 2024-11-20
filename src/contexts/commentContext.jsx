import { createContext, useEffect, useState } from "react";
import { getComments } from "../helpers/comments";
import { useParams } from "react-router-dom";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      let commentsData = await getComments(params.id);
      setComments(
        commentsData.filter((comment) => comment.feelingId === params.id)
      );
      setIsLoading(false);
    };
    fetch();
  }, [params]);

  const value = {
    comments,
    isLoading,
    setComments,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export { CommentContext, CommentProvider };
