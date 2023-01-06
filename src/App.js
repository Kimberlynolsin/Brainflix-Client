import { useState } from "react";
import data from "../src/data/video-details.json";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Comments from "./components/Comments/Comments";

function App() {
  const [vidData, setDefaultVid] = useState(data);
  
  const currentVid = vidData[0]

  return (
    <>
      <Header />
      <VideoPlayer vid = {currentVid}/>
      <Comments comments = {currentVid}/>
    </>
  );
}

export default App;
