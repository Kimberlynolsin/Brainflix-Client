import "./HomePage.scss";
import { useEffect, useState } from "react";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import VideoPlayerDiv from "../../components/VideoPlayerDiv/VideoPlayerDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const BASE_URL = "https://project-2-api.herokuapp.com";
  const API_KEY = "21fe8862-8c27-4e98-ac56-938eb70588eb";

  const [originalVideo, setOriginalVideo] = useState(null);
  const [videoThumbnail, setVideoThumbnail] = useState([]);

  let { videoId } = useParams();

  let id = videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";

  useEffect(() => {
    const getOriginalVideo = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/videos/${id}?api_key=${API_KEY}`
        );

        setOriginalVideo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOriginalVideo();
  }, [id]);

  useEffect(() => {
    const getThumbnailVideo = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/videos/?api_key=${API_KEY}`
        );

        setVideoThumbnail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getThumbnailVideo();
  }, []);

  return (
    <>
      {originalVideo && <VideoPlayer defaultVideo={originalVideo} />}
      <main className="main-section">
        <div className="main-section__content">
          {originalVideo && <VideoPlayerDiv defaultVideo={originalVideo} />}
          {originalVideo && <Comments comments={originalVideo} />}
        </div>
          <NextVideo thumbnail={videoThumbnail} selectedId={id} />
      </main>
    </>
  );
}

export default HomePage;
