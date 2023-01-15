import "./UploadVideo.scss";
import preview from "../../assets/images/upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

const UploadVideo = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let clicked = e.currentTarget;
    if (clicked) {
      alert("Your video has been published!!");
      navigate("/");
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    let cancelled = e.currentTarget;
    if (cancelled) {
      alert("Your upload has been cancelled");
    }
    navigate(-1);
  };
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__desktop">
        <div className="upload__container">
          <h2 className="upload__subtitle">video thumbnail</h2>
          <img className="upload__preview" src={preview} alt="bicycle"></img>
        </div>
          <form className="upload__form" onSubmit={handleSubmit}>
            <label className="upload__form__label">
              <p className="upload__form__title">title your video </p>
              <input
                type="text"
                placeholder="Add a title to your video"
                className="upload__form__input"
              ></input>
            </label>
            <label className="upload__form__description">
              <p className="upload__form__description__title">
                add a video description
              </p>
              <textarea
                type="text"
                placeholder="Add a description to your video"
                className="upload__form__description__textarea"
              ></textarea>
            </label>
            <div className="upload__form__btn-container">
              <input
                type="submit"
                value="PUBLISH"
                className="upload__form__btn__publish"
              ></input>
              <input
                type="submit"
                value="CANCEL"
                className="upload__form__btn__cancel"
                onClick={handleCancel}
              ></input>
              <input
                type="submit"
                value="PUBLISH"
                className="upload__form__btn__publish--tablet"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UploadVideo;
