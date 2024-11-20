import { useState } from "react";
import Feeling from "./Feeling";
import TellFeelingForm from "./TellFeelingForm";
import BaseModal from "./BaseModal";
import { deleteFeeling } from "../helpers/feelings";
import useFeeling from "../helpers/useFeeling";
import { toast } from "react-toastify";

export default function FeelingLists({ feelings }) {
  const [feeling, setFeeling] = useState(null);

  const feelingContext = useFeeling();

  const handleEdit = (feeling) => {
    setFeeling(feeling);
    document.getElementById("editFeelingModal").showModal();
  };

  const handleDelete = async (id) => {
    try {
      await deleteFeeling(id);
      feelingContext?.setFeelings((prevFeelings) =>
        prevFeelings.filter((feeling) => feeling.id !== id)
      );
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
      {feelings.map((feeling) => (
        <div
          key={feeling.id}
          className="h-max bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
        >
          <Feeling
            feeling={feeling}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      ))}
      <BaseModal id={"editFeelingModal"} title="Edit Feeling">
        <TellFeelingForm feeling={feeling} />
      </BaseModal>
    </div>
  );
}
