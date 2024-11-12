import { useState } from "react";
import Photo from "./Photo";

export default function Gallery({ showPagination, limit }) {
  const [photos] = useState([
    "/boat.avif",
    "/boat.avif",
    "/boat.avif",
    "/boat.avif",
    "/boat.avif",
    "/sunset.avif",
    "/sunset.avif",
    "/sunset.avif",
    "/sunset.avif",
    "/sunset.avif",
  ]);

  const limitedPhotos = photos.slice(0, limit);

  return (
    <div className="p-10">
      <h1 className="title">Gallery</h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedPhotos.map((photo, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <Photo url={photo} />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" onClick={() => document.getElementById("galleryModal").showModal()}>
              <span className="text-white font-bold">View Photo</span>
            </div>

            <dialog id="galleryModal" className="modal">
              <div className="modal-box p-4 bg-gray-50 bg-opacity-80">
                <Photo url={photo} />
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
