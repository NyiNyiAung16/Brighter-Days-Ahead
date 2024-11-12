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
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      username: "Su Su",
    },
  ]);

  return (
    <div className="p-10">
        <h1 className="title">Short Quotes</h1>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {messages.map((message, i) => (
            <div key={i} className=" bg-white rounded-lg p-2 shadow-lg">
              <Message message={message} />
            </div>
          ))}
        </div>
    </div>
  );
}
