import { useState } from "react";
import Message from "./Message";

export default function PreviewMessages() {
  const [messages] = useState([
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Mg Mg",
    },
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Aunt Aunt",
    },
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Lin Lin",
    },
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Su Su",
    },
  ]);

  return (
    <div className="p-10">
        <h1 className="text-5xl font-bold text-center">Short Quotes</h1>
        <div className="mt-10 grid grid-cols-2 items-end gap-6">
        {messages.map((message, i) => (
            <Message message={message} key={i} />
        ))}
        </div>
    </div>
  );
}
