import "./VideoPlayerDiv.scss";

const VideoPlayerDiv = (props) => {
  const date = new Date().toLocaleDateString(props.vid.timestamp);

  return (
    <section className="video-summary-section">
      <div>
        <h1 className="video-section__title">{props.vid.title}</h1>
      </div>
      <div className="video">
        <div className="video__container">
          <div className="video__container__details video__container__details--left">
            <p className="video__container__details--channel">
              By {props.vid.channel}
            </p>
            <p className="video__container__details--other">{date}</p>
          </div>
          <div className="video__container__details video__container__details--right">
            <p className="video__container__details--views">
              {props.vid.views}
            </p>
            <p className="video__container__details--likes">
              {props.vid.likes}
            </p>
          </div>
        </div>
        <div className="video__container__description">
          <p>By {props.vid.description}</p>
        </div>
        <div className="video__container__comments">
          <p className="video__container__comments--count">
            {props.vid.comments.length} Comments
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayerDiv;
