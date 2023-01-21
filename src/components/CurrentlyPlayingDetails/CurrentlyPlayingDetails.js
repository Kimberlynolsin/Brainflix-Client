import "./CurrentlyPlayingDetails.scss";

const CurrentlyPlayingDetails = ({ defaultVideo }) => {
  return (
    <section className="video-summary-section">
      <div>
        <h1 className="video-section__title">{defaultVideo.title}</h1>
      </div>
      <div className="video">
        <div className="video__container">
          <div className="video__container__details video__container__details--left">
            <p className="video__container__details--channel">
              By {defaultVideo.channel}
            </p>
            <p className="video__container__details--other">
              {new Date(defaultVideo.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="video__container__details video__container__details--right">
            <p className="video__container__details--views">
              {defaultVideo.views}
            </p>
            <p className="video__container__details--likes">
              {defaultVideo.likes}
            </p>
          </div>
        </div>
        <div className="video__container__description">
          <p> {defaultVideo.description}</p>
        </div>
        <div className="video__container__comments">
          <p className="video__container__comments--count">{`${defaultVideo.comments.length} Comments`}</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyPlayingDetails;
