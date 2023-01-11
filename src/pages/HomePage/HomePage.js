import "./HomePage.scss";
import { useState } from "react";
import data from "../../data/video-details.json";
import shortData from "../../data/videos.json";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import VideoPlayerDiv from "../../components/VideoPlayerDiv/VideoPlayerDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

function HomePage() {
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
      <VideoPlayer vid={currentVid} />
      <main className="main-section">
        <div className="main-section__content">
          <VideoPlayerDiv vid={currentVid} />
          <Comments comments={currentVid} />
        </div>
        <NextVideo shortVid={nextVideos} handler={handlerFunc} />
      </main>
    </>
  );
}

export default HomePage;
