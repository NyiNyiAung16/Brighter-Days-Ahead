import { useState } from "react";
import { getYouTubeID } from "../helpers/getYoutubeId";
import Actions from "./Actions";
import RelaxationForm from "./RelaxationForm";
import BaseModal from "./BaseModal";
import { deleteRelax } from "../helpers/relaxation";
import useRelaxation from "../helpers/useRelaxation";
import { toast } from "react-toastify";
import { useAuth } from "../helpers/useAuth";

export default function RelaxationLists({ relaxations }) {
  const [relaxation, setRelaxation] = useState(null);

  const relaxationContext = useRelaxation();
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;

  const handleDelete = async (relaxation) => {
    if( relaxation.user.id !== userId) return;

    try {
      await deleteRelax(relaxation.id);
      relaxationContext?.setRelaxations((prevRelax) => prevRelax.filter((relax) => relax.id !== relaxation.id));
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-10">
      {relaxations &&
        relaxations.map((relaxation) => (
          <div key={relaxation.id}>
            <div className="relaxation-card group relative">
              <h2>Relaxation Corner</h2>
              <p>{relaxation.message}</p>

              <div className="video-container">
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${getYouTubeID(
                    relaxation.videoUrl
                  )}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen={true}
                ></iframe>
              </div>

              <p className="creator-name">
                Video by{" "}
                <a
                  href="https://www.youtube.com/user/suggested_creator"
                  target="_blank"
                >
                  {relaxation.user.name}
                </a>
              </p>

              { relaxation.user.id === userId && <Actions
                onDelete={() => handleDelete(relaxation)}
                onEdit={() =>
                  {
                    document.getElementById("editRelaxationModal").showModal();
                    setRelaxation(relaxation);
                  }
                }
              />}

            </div>
          </div>
        ))}

        <BaseModal id="editRelaxationModal" title="Edit Relaxation">
          <RelaxationForm relaxation={relaxation} />
        </BaseModal>
    </div>
  );
}
