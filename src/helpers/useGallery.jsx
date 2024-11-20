import { useContext } from "react";
import { GalleryContext } from "../contexts/galleryContext";

export default function useGallery() {
    const context = useContext(GalleryContext);
    return context;
}