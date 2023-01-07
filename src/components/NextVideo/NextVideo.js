import "./NextVideo.scss";

const NextVideo = (props) => {
  const videoThumbnail = props.vidList.map((el) => {
    return (
      <div className="next-vid" onClick={props.handler}>
        <img className="next-vid__img" src={el.image}></img>
        <div className="next-vid__details">
          <p className="next-vid__description">{el.title}</p>
          <p className="next-vid__author">{el.channel}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <h2 className="next-vid__title">next videos</h2>
      {videoThumbnail}
    </section>
  );
};

export default NextVideo;
