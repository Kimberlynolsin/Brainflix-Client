import "./UploadVideo.scss";
import Header from "../../components/Header/Header";
import preview from "../../assets/images/upload-video-preview.jpg";

const UploadVideo = () => {
  return (
    <>
      <Header />
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div>
          <h2 className="upload__subtitle">video thumbnail</h2>
          <video classname="upload__preview" poster={preview}></video>
        </div>
        <form className="upload__form">
          <label className="upload__video-title">
            title your video
            <input type="text" placeholder="Add a title to your video"></input>
          </label>
          <label className="upload__video-description">
            add a video description
            <input
              type="text"
              placeholder="Add a description to your video"
            ></input>
          </label>
          <input type="submit" value="PUBLISH"></input>
        </form>
      </section>
    </>
  );
};

export default UploadVideo;
