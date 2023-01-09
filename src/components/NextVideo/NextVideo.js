import "./NextVideo.scss";

const NextVideo = (props) => {
  const videoThumbnail = props.shortVid.map((el) => {
    return (
      <div
        id={el.id}
        key={el.id}
        className="next-vid-section__thumbnail"
        onClick={props.handler}
      >
        <img className="next-vid-section__img" src={el.image} alt="video thumbnail"></img>
        <div className="next-vid-section__details">
          <p className="next-vid-section__description">{el.title}</p>
          <p className="next-vid-section__author">{el.channel}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="next-vid-section">
      <p className="next-vid-section__title">next videos</p>
      {videoThumbnail}
    </section>
  );
};

export default NextVideo;