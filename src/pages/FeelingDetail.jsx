import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Feeling from "../components/Feeling";
import CommentForm from "../components/Form";
import CommentLists from "../components/CommentLists";

export default function FeelingDetail() {
  const [feelings, setFeelings] = useState([
    { id: 1, text: "happy morning", username: "Mg Mg" },
    { id: 2, text: "happy evening", username: "Aunt Aunt" },
    { id: 3, text: "happy morning", username: "Su Su" },
    { id: 4, text: "happy night", username: "Lin Lin" },
    { id: 5, text: "happy morning", username: "Mg Mg" },
  ]);

  const [comments,setComments] = useState([
    { id:1, body: 'sleep 5 minutes', feelingId: 1, username: "mgmg" },
    { id:2, body: 'sleep 5 minutes', feelingId: 2, username: "auntaunt" },
    { id:3, body: 'sleep 5 minutes', feelingId: 3, username: "susu" },
    { id:4, body: 'sleep 5 minutes', feelingId: 4, username: "linlin" },
    { id:5, body: 'sleep 5 minutes', feelingId: 5, username: "mgmg" },
  ]);

  const params = useParams();

  const feeling = feelings.find((feeling) => feeling.id === Number(params.id));

  const onHandleSubmit = (body) => {
    setComments((prevComments) => [{ id: prevComments.length + 1, body, feelingId: Number(params.id), username: 'mg mg' }, ...prevComments,]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-xl mx-auto mt-10">
        <Feeling feeling={feeling}/>
        <div className="mt-10">
          <CommentForm onHandleSubmit={onHandleSubmit} title={"Add Comment"} placeholder={"What are you thinking?"}/>
          <CommentLists comments={comments}/>
        </div>
      </div>
    </div>
  );
}
