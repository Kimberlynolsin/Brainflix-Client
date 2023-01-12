import "./NextVideo.scss";
import { useParams, Link } from "react-router-dom";

const NextVideo = ({ index, title, channel, img }) => {
  const params = useParams();
  const {id} = params;
  console.log("in next videos", index);

  // const videoThumbnail = props.shortVid.map((el) => {
  //   return (
  //     <div
  //       id={el.id}
  //       key={el.id}
  //       className="next-vid-section__thumbnail"
  //       // onClick={props.handler}
  //     >
  //       <img className="next-vid-section__img" src={el.image} alt="video thumbnail"></img>
  //       <div className="next-vid-section__details">
  //         <p className="next-vid-section__description">{el.title}</p>
  //         <p className="next-vid-section__author">{el.channel}</p>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    // <section className="next-vid-section">
    //   <p className="next-vid-section__title">next videos</p>
    <>
      <Link to={`/next-videos/${id}`}>
        <div
          key={index}
          className="next-vid-section__thumbnail"
          // onClick={props.handler}
        >
          <img
            className="next-vid-section__img"
            src={img}
            alt="video thumbnail"
          ></img>
          <div className="next-vid-section__details">
            <p className="next-vid-section__description">{title}</p>
            <p className="next-vid-section__author">{channel}</p>
          </div>
        </div>
      </Link>
    </>
    //  </section>
  );
};

export default NextVideo;
