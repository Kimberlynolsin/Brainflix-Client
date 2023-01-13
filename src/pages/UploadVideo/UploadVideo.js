import "./UploadVideo.scss";
// import Header from "../../components/Header/Header";
import preview from "../../assets/images/upload-video-preview.jpg";

const UploadVideo = () => {
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <h2 className="upload__subtitle">video thumbnail</h2>
        <div className="upload__container">
          <img className="upload__preview" src={preview} alt="bicycle"></img>
        </div>

        <form className="upload__form">
          <label className="upload__form__label">
            <p className="upload__form__title">title your video </p>
            <input type="text" placeholder="Add a title to your video"></input>
          </label>
          <label className="upload__form__description">
            <p className="upload__form__description__title">
              add a video description
            </p>
            <textarea
              type="text"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
          <input type="submit" value="PUBLISH" className="publish"></input>
          <input type="submit" value="CANCEL" className="cancel"></input>
        </form>
      </section>
    </>
  );
};

export default UploadVideo;
