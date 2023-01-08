import "../../components/VideoPlayer/VideoPlayer.scss";
import VideoPlayerDiv from "../VideoPlayerDiv/VideoPlayerDiv";

const VideoPlayer = (props) => {
  return (
    <section className="video-section">
      <div className="video-section__container">
        <video
          controls
          className="video-section__img"
          key={props.vid.id}
          poster={props.vid.image}
        ></video>
      </div>
      <div>
        <h1 className="video-section__title">{props.vid.title}</h1>
      </div>
      <VideoPlayerDiv details={props.vid} />
    </section>
  );
};

export default VideoPlayer;
