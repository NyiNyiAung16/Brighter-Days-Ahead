import { useState } from "react";
import Photo from "./Photo";
import { useMatch } from "react-router-dom";

export default function GalleryLists({ gallery }) {
  const [photoDetail, setPhotoDetail] = useState("");

  const match = useMatch("/memories");

  const showPhotoModal = (photo) => {
    document.getElementById("galleryModal").showModal();
    setPhotoDetail({ url: photo.url, publishedUserName: photo.user.name });
  };

  return (
    <div className="p-10">
      {!match && <h1 className="title">Memories</h1>}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden rounded-lg shadow-md group "
          >
            <Photo url={photo.url} />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              onClick={() => showPhotoModal(photo)}
            >
              <span className="text-white font-bold">View Photo</span>
            </div>

            <PhotoModal photo={photoDetail} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoModal({ photo }) {
  return (
    <dialog id="galleryModal" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box p-4 bg-gray-50 bg-opacity-80">
        <Photo url={photo.url} />
        <p>
          Published by: <strong>{photo.publishedUserName}</strong>
        </p>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
