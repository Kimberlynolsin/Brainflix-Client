import { Link } from "react-router-dom";
import "../../components/CurrentlyPlaying/CurrentlyPlaying.scss";

const CurrentlyPlaying = ({ defaultVideo }) => {
  return (
    <section className="video-section">
      <div className="video-section__container">
        <Link to={`/${defaultVideo.id}`}>
          <video
            controls
            className="video-section__img"
            id={defaultVideo.id}
            poster={defaultVideo.image}
          ></video>
        </Link>
      </div>
    </section>
  );
};
export default CurrentlyPlaying;
