import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../components/VideoPlayer/VideoPlayer.scss";

const VideoPlayer = ({ defaultVideo }) => {
  if (!defaultVideo) {
    return <p>Page is Loading....</p>;
  } else {
    return (
      <section className="video-section">
        <div className="video-section__container">
          <Link to={`/${defaultVideo.id}`}>
            <video
              controls
              className="video-section__img"
              id={defaultVideo.id}
              poster={defaultVideo.image}
            ></video>
          </Link>
        </div>
      </section>
    );
  }
};
export default VideoPlayer;
