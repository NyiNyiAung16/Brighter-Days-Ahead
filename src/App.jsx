import "./App.css";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import PreviewMessages from "./components/PreviewMessages";

function App() {

    

  return (
    <div className="App">
      <Banner />
      <PreviewMessages/>
      <Gallery limit={6}/>
    </div>
  );
}

export default App;
