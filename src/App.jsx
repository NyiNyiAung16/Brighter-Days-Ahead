import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import MotivateMessageModal from "./components/MotivateMessageModal";
import PreviewMessages from "./components/PreviewMessages";
import RelaxationLists from "./components/RelaxationLists";
import Footer from "./components/Footer";
import GalleryLists from "./components/GalleryLists";
import { getPhotos } from "./helpers/gallery";
import { getRelaxation } from "./helpers/relaxation";
import { getFeelings } from "./helpers/feelings";
import Spinner from "./components/Spinner";
import { setTitle } from "./helpers/setTitle";


function App() {
  const [relaxations, setRelaxations] = useState([]);
  const [feelings, setFeelings] = useState([]);
  const [gallery, setGallery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTitle("Home");
    const fetch = async () => {
      setIsLoading(true);

      let galleryData = await getPhotos();
      let relaxationsData = await getRelaxation();
      let feelingsData = await getFeelings();

      setGallery(galleryData);
      setRelaxations(relaxationsData);
      setFeelings(feelingsData);

      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <Banner />
      {isLoading && <Spinner className="block mx-auto my-4" />}
      {!isLoading && (
        <>
          <div className="container mx-auto py-8">
            {gallery && <GalleryLists gallery={gallery.slice(0, 4)} />}
          </div>
          <div className="container mx-auto py-8 bg-gray-50 bg-opacity-10">
            <PreviewMessages feelings={feelings.slice(0, 3)} />
          </div>
          <MotivateMessageModal />
          <div className="container mx-auto py-8 ">
            <h1 className="title">Relaxation Corner</h1>
            {relaxations && (
              <RelaxationLists relaxations={relaxations.slice(0, 4)} />
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
