import { useState } from "react";
import GalleryLists from "../components/GalleryLists";
import Header from "../components/Header";

export default function Gallery() {
    const [gallery] = useState([
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

    return (
        <div className="min-h-screen">
            <Header/>
            <GalleryLists gallery={gallery}/>
        </div>
    )
}