import { useState } from "react";
import EditIcon from "./EditIcon";
import TrashIcon from "./TrashIcon";

export default function Actions({ onDelete, onEdit }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const handleClick = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    onDelete();
  };

  return (
    <div className="flex items-center space-x-1 absolute top-0 right-0 p-3">
      <EditIcon
        className={
          "hidden hover:scale-105 duration-200 cursor-pointer group-hover:block"
        }
        onClick={onEdit}
      />
      <TrashIcon
        className={
          "hidden hover:scale-105 duration-200 cursor-pointer group-hover:block"
        }
        onClick={handleClick}
      />
    </div>
  );
}
