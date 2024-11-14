import FeelingLists from "../components/FeelingLists";
import { useState } from "react";
import DefaultLayout from "../layouts/default";

export default function Feelings() {
  const [feelings] = useState([
    { id: 1, text: "happy morning", username: "Mg Mg" },
    { id: 2, text: "happy evening", username: "Aunt Aunt" },
    { id: 3, text: "happy morning", username: "Su Su" },
    { id: 4, text: "happy night", username: "Lin Lin" },
    { id: 5, text: "happy morning", username: "Mg Mg" },
  ]);

  return (
    <DefaultLayout>
        <FeelingLists feelings={feelings} />
    </DefaultLayout>
  );
}
