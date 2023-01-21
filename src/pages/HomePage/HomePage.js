import "./HomePage.scss";
import { useEffect, useState } from "react";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import CurrentlyPlayingDetails from "../../components/CurrentlyPlayingDetails/CurrentlyPlayingDetails";
import CurrentlyPlaying from "../../components/CurrentlyPlaying/CurrentlyPlaying";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const BASE_URL = "http://localhost:8000";
  const API_KEY = "21fe8862-8c27-4e98-ac56-938eb70588eb";

  const [originalVideo, setOriginalVideo] = useState(null);
  const [initialId, setInitialId] = useState(null);
  const [videoThumbnail, setVideoThumbnail] = useState(null);

  let { videoId } = useParams();
  let id = videoId || initialId;

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
        setInitialId(data[0].id);
        setVideoThumbnail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getThumbnailVideo();
  }, []);

  if (!originalVideo || !videoThumbnail) {
    return <p>Page is loading.....</p>;
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
