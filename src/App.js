import "./App.scss";
import { useState } from "react";
import data from "../src/data/video-details.json";
import shortData from "../src/data/videos.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Comments from "./components/Comments/Comments";
import NextVideo from "./components/NextVideo/NextVideo";

function App() {
  const [vidDetails, setDefaultVid] = useState(data);
  const [currentVid, setCurrentVid] = useState(vidDetails[0]);
  const [nextVideos, setNextVideos] = useState(shortData);

  function handlerFunc(e) {
    const newCurrentVid = vidDetails.find(
      (vid) => vid.id === e.currentTarget.id
    );
    setCurrentVid(newCurrentVid);

    const newArr = shortData.filter(
      (element) => element.id !== e.currentTarget.id
    );
    setNextVideos(newArr);
    
  }

  return (
    <>
      <Header />
      <VideoPlayer vid={currentVid} />
      <Comments comments={currentVid} />
      <NextVideo
        shortVid={nextVideos}
        handler={handlerFunc}
      />
    </>
  );
}

export default App;


