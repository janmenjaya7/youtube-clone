import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./components/videoSection/videosec.css";
import VideoSection from "./components/videoSection/VideoSection";
import ShortsSection from "./components/shorts/ShortsSection";
import Sidenavbar from "./components/Sidenavbar";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
// import IconSection from "./components/videoSection/IconSection";
function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Sidenavbar toggleDrawer={toggleDrawer} open={open} />
      </Drawer>
      {/* <IconSection /> */}
      <VideoSection />
      <ShortsSection />
    </>
  );
}

export default App;
