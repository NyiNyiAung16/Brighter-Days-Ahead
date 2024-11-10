import { useState } from "react";
import Photo from "./Photo";

export default function Gallery({ showPagination, limit}) {
    const [photos] = useState([
        '/boat.avif',
        '/boat.avif',
        '/boat.avif',
        '/boat.avif',
        '/boat.avif',
        '/sunset.avif',
        '/sunset.avif',
        '/sunset.avif',
        '/sunset.avif',
        '/sunset.avif',
    ]);

    const limitedPhotos = photos.slice(0, limit);

    return (
        <div className="p-10">
            <h1 className="title">Gallery</h1>
            <div className="grid grid-cols-3 gap-3">
                { limitedPhotos.map((photo, i) => (
                    <Photo url={photo} key={i} />
                ))}
            </div>
        </div>
    )
}