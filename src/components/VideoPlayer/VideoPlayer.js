import "../../components/VideoPlayer/VideoPlayer.scss";

const VideoPlayer = (props) => {

  console.log(props.vid.image);
  
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
    </section>
  );
};

export default VideoPlayer;
