import "../../components/VideoPlayer/VideoPlayer.scss";
import data from "../../data/video-details.json";
import playBtn from '../../assets/images/play.svg';

const VideoPlayer = () => {
  const video = data;
console.log(video)
  return (
    <div className="video-player">
      <video poster={playBtn} controls
        className="video-player__img"
        key={video[0].id}
        src={video[0].video}
      ></video>
      <div>
      <h1 className="video-player__title">{video[0].title}</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;
