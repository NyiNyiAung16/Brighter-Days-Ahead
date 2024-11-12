import "./App.css";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import MotivateMessageModal from "./components/MotivateMessageModal";
import PreviewMessages from "./components/PreviewMessages";

function App() {

    

  return (
    <div className="App">
      <Banner />
      <PreviewMessages/>
      <div className="bg-gray-50 bg-inherit">
        <Gallery limit={6}/>
      </div>
      <MotivateMessageModal/>
    </div>
  );
}

export default App;
