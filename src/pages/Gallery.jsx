import GalleryLists from "../components/GalleryLists";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { setTitle } from "../helpers/setTitle";
import useGallery from "../helpers/useGallery";
import DefaultLayout from "../layouts/default";

export default function Gallery() {
  const galleryContext = useGallery();
  setTitle("Memories");


  return (
    <DefaultLayout>
        {galleryContext?.isLoading && <Spinner className="block mx-auto" />}
        {!galleryContext?.isLoading && <GalleryLists gallery={galleryContext?.gallery} />}
    </DefaultLayout>
  );
}
