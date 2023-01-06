import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import data from "../src/data/video-details.json";
import { useState } from "react";

function App() {
  // console.table(data);

  const [vidData, setDefaultVid] = useState(data);
  const currentVid = vidData[0]

  return (
    <>
      <Header />
      <VideoPlayer vid = {currentVid}/>
    </>
  );
}

export default App;
