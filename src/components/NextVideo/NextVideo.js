import { Link } from "react-router-dom";
import "./NextVideo.scss";
const NextVideo = ({ thumbnail }) => {
  // console.log(comments[0].id);
  // console.log(thumbnail);

  const videoArray =
    thumbnail &&
    thumbnail.map((element) => {
      return (
        <Link to={`/${element.id}`}>
          <div
            id={element.id}
            key={element.id}
            className="next-vid-section__thumbnail"
          >
            <img
              className="next-vid-section__img"
              src={element.image}
              alt="video thumbnail"
            ></img>
            <div className="next-vid-section__details">
              <p className="next-vid-section__description">{element.title}</p>
              <p className="next-vid-section__author">{element.channel}</p>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <section className="next-vid-section">
      <p className="next-vid-section__title">next videos</p>
      {videoArray}
    </section>
  );
};

export default NextVideo;
