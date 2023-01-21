import { Link } from "react-router-dom";
import "./NextVideoList.scss";

const NextVideoList = ({ thumbnail, selectedId }) => {
  const listedVideos = thumbnail
    .filter((id) => {
      return id.id !== selectedId;
    })
    .map((element) => {
      return (
        <Link to={`/${element.id}`} key={element.id} className="list__link">
          <div id={element.id} className="list__link__thumbnail">
            <img
              className="list__link__img"
              src={element.image}
              alt="video thumbnail"
            ></img>
            <div className="list__link__details">
              <p className="list__link__description">{element.title}</p>
              <p className="list__link__author">{element.channel}</p>
            </div>
          </div>
        </Link>
      );
    });

  return <>{listedVideos}</>;
};
export default NextVideoList;
