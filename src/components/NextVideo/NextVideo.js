import NextVideoList from "../NextVideoList/NextVideoList";
import "./NextVideo.scss";
const NextVideo = ({ thumbnail, selectedId }) => {
  return (
    <section className="next-vid-section">
      <p className="next-vid-section__title">next videos</p>
      <NextVideoList thumbnail={thumbnail} selectedId={selectedId} />
    </section>
  );
};

export default NextVideo;
