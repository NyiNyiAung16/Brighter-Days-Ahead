import GalleryLists from "../components/GalleryLists";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { setTitle } from "../helpers/setTitle";
import useGallery from "../helpers/useGallery";

export default function Gallery() {
  const galleryContext = useGallery();
  setTitle("Memories");

  return (
    <div className="min-h-screen">
      <Header />
      {galleryContext?.isLoading && <Spinner className="block mx-auto" />}
      {!galleryContext?.isLoading && <GalleryLists gallery={galleryContext?.gallery} />}
    </div>
  );
}
