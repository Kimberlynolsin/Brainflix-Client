import "./HomePage.scss";
import { useEffect, useState } from "react";
import data from "../../data/video-details.json";
import shortData from "../../data/videos.json";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import VideoPlayerDiv from "../../components/VideoPlayerDiv/VideoPlayerDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";

function HomePage() {
  const URL =
    "https://project-2-api.herokuapp.com/videos?api_key=b694f26b-0dfd-4f61-bd97-068859087909";

  // const [vidDetails, setDefaultVid] = useState(data);
  // const [currentVid, setCurrentVid] = useState(vidDetails[0]);
  // const [nextVideos, setNextVideos] = useState(shortData);
  const [comments, getComments] = useState(null);
  

  function handlerFunc(e) {
  //   const newCurrentVid = vidDetails.find(
  //     (vid) => vid.id === e.currentTarget.id
  //   );
  //   setCurrentVid(newCurrentVid);

  //   const newArr = shortData.filter(
  //     (element) => element.id !== e.currentTarget.id
  //   );
  //   setNextVideos(newArr);
  // }

  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios.get(URL)
    } 
    getComments(data)
  },[]);

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
