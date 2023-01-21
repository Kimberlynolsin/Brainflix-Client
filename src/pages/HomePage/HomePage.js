import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import CurrentlyPlayingDetails from "../../components/CurrentlyPlayingDetails/CurrentlyPlayingDetails";
import CurrentlyPlaying from "../../components/CurrentlyPlaying/CurrentlyPlaying";

function HomePage() {
  const BASE_URL = "http://localhost:8000";

  const [originalVideo, setOriginalVideo] = useState(null);
  const [initialId, setInitialId] = useState(null);
  const [videoThumbnail, setVideoThumbnail] = useState(null);

  let { videoId } = useParams();
  let id = videoId || initialId;

  useEffect(() => {
    const getOriginalVideo = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/videos/${id}`);

        setOriginalVideo(data);
      } catch (error) {
        console.log("Homepage:", error);
      }
    };
    getOriginalVideo();
  }, [id]);

  useEffect(() => {
    const getThumbnailVideo = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/videos`);
        setInitialId(data[0].id);
        setVideoThumbnail(data);
      } catch (error) {
        console.log("Homepage Thumbnail:", error);
      }
    };
    getThumbnailVideo();
  }, []);

  if (!originalVideo || !videoThumbnail) {
    return <h3 className="main-section__loading">Page is loading.....</h3>;
  }

  return (
    <>
      <CurrentlyPlaying defaultVideo={originalVideo} />
      <main className="main-section">
        <div className="main-section__content">
          <CurrentlyPlayingDetails defaultVideo={originalVideo} />
          <Comments comments={originalVideo} />
        </div>
        <NextVideo thumbnail={videoThumbnail} selectedId={id} />
      </main>
    </>
  );
}

export default HomePage;
