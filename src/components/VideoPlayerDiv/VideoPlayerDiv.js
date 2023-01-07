import "./VideoPlayerDiv.scss";

const VideoPlayerDiv = (props) => {
  const date = new Date().toLocaleDateString(props.details.timestamp);

  return (
    <>
      <div className="video__container">
        <div className="video__container__details video__container__details--left">
          <p className="video__container__details--channel">By {props.details.channel}</p>
          <p className="video__container__details--other">{date}</p>
        </div>
        <div className="video__container__details video__container__details--right">
          <p className="video__container__details--views">{props.details.views}</p>
          <p className="video__container__details--likes">{props.details.likes}</p>
        </div>
      </div>
      <div className="video__container__description">
        <p>By {props.details.description}</p>
      </div>
      <div className="video__container__comments">
        <p className="video__container__comments--count">{props.details.comments.length} comments</p>
      </div>
    </>
  );
};

export default VideoPlayerDiv;
