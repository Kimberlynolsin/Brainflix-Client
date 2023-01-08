import "./NextVideo.scss";

const NextVideo = (props) => {
  

  const videoThumbnail = props.shortVid.map((el) => {
    
    return (
      <div id={el.id} className="next-vid-section__thumbnail" onClick={props.handler}>
        <img className="next-vid-section__img" src={el.image}></img>
        <div className="next-vid-section__details">
          <p className="next-vid-section__description">{el.title}</p>
          <p className="next-vid-section__author">{el.channel}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="next-vid-section">
      <h2 className="next-vid-section__title">next videos</h2>
      {videoThumbnail}
    </section>
  );
};

export default NextVideo;
