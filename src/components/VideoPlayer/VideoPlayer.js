import "../../components/VideoPlayer/VideoPlayer.scss";
import VideoPlayerDiv from "../VideoPlayerDiv/VideoPlayerDiv";

const VideoPlayer = (props) => {
  return (
    <div className="video">
      <video
        controls
        className="video__img"
        key={props.vid.id}
        poster={props.vid.image}
      ></video>
      <div>
        <h1 className="video__title">{props.vid.title}</h1>
      </div>
      <VideoPlayerDiv details ={props.vid} />
    </div>
  );
};

export default VideoPlayer;
