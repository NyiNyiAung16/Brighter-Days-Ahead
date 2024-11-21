import { useState } from "react";
import EditIcon from "./EditIcon";
import TrashIcon from "./TrashIcon";
import BaseModal from './BaseModal';

export default function Actions({ onDelete, onEdit, className }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const handleClick = () => {
    setIsProcessing(true);
    onDelete();
  };

  return (
    <div className={`flex items-center space-x-1 absolute top-0 right-0 ${className}`}>
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
        onClick={() => document.getElementById("deleteModal").showModal()}
      />

      <BaseModal id="deleteModal" title="Are you sure to delete?">
          <div className="flex items-center justify-center gap-x-5">
            <button
              onClick={handleClick}
              className="btn btn-error"
              disabled={isProcessing}
            >
              Yes
            </button>    
            <button
              onClick={() => document.getElementById("deleteModal").close()}
              className="btn btn-neutral"
            >
              No
            </button>
          </div>
      </BaseModal>
    </div>
  );
}
