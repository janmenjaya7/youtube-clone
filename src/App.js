import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./components/videoSection/videosec.css";
import VideoSection from "./components/videoSection/VideoSection";

function App() {
  return (
    <>
      <Navbar />
      <VideoSection />
    </>
  );
}

export default App;
