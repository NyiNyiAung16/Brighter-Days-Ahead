import { useState } from "react";
import Photo from "./Photo";

export default function GalleryLists({ gallery, showPagination }) {
  const [photoUrl, setPhotoUrl] = useState('');

  const showPhotoModal = (url) => {
    document.getElementById("galleryModal").showModal();
    setPhotoUrl(url);
  }

  return (
    <div className="p-10">
      <h1 className="title">Memories</h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((photo, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <Photo url={photo} />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              onClick={() => showPhotoModal(photo)}
            >
              <span className="text-white font-bold">View Photo</span>
            </div>

            <PhotoModal photoUrl={photoUrl}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoModal({ photoUrl }) {
  return (
    <dialog id="galleryModal" className="modal">
      <div className="modal-box p-4 bg-gray-50 bg-opacity-80">
        <Photo url={photoUrl} />
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
