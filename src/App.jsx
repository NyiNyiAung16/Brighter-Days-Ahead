import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import MotivateMessageModal from "./components/MotivateMessageModal";
import PreviewMessages from "./components/PreviewMessages";
import RelaxationLists from "./components/RelaxationLists";
import Footer from "./components/Footer";
import GalleryLists from "./components/GalleryLists";

function App() {
  const [relaxations] = useState([
    {
      id: 1,
      videoId: "YWW1Kc7j6Do",
      message: "It is gonna be okay, don't worry",
      suggestedUser: "Mg Mg",
    },
    {
      id: 2,
      videoId: "ekr2nIex040",
      message: "It is gonna be okay, don't worry",
      suggestedUser: "Aunt Mg",
    },
    {
      id: 3,
      videoId: "YWW1Kc7j6Do",
      message:
        "You are allowed to rest, to take a pause, and to simply be. Embrace this time to relax and recharge.",
      suggestedUser: "Lin Lin",
    },
    {
      id: 4,
      videoId: "YWW1Kc7j6Do",
      message:
        "You are allowed to rest, to take a pause, and to simply be. Embrace this time to relax and recharge.",
      suggestedUser: "Lin Lin",
    },
  ]);

  const [gallery] = useState([
    "/boat.avif",
    "/boat.avif",
    "/boat.avif",
    "/boat.avif",
  ]);

  return (
    <div className="App">
      <Banner />
      <div className="container mx-auto py-8">
        <GalleryLists gallery={gallery} limit={4} />
      </div>
      <div className="container mx-auto py-8 bg-gray-50 bg-opacity-10">
        <PreviewMessages />
      </div>
      <MotivateMessageModal />
      <div className="container mx-auto py-8 ">
        <h1 className="title">Relaxation Corner</h1>
        <RelaxationLists relaxations={relaxations} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
