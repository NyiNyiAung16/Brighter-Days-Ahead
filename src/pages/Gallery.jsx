import GalleryLists from "../components/GalleryLists";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import useGallery from "../helpers/useGallery";

export default function Gallery() {
  const galleryContext = useGallery();

  return (
    <div className="min-h-screen">
      <Header />
      {galleryContext?.isLoading && <Spinner className="block mx-auto" />}
      {!galleryContext?.isLoading && <GalleryLists gallery={galleryContext?.gallery} />}
    </div>
  );
}
