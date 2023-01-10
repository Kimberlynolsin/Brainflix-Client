import "./UploadVideo.scss";
import Header from "../../components/Header/Header";
import preview from "../../assets/images/upload-video-preview.jpg";

const UploadVideo = () => {
  return (
    <>
      <Header />
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
          <h2 className="upload__subtitle">video thumbnail</h2>
        <div className="upload__container">
          <img className="upload__preview" src={preview} alt='bicycle'></img>
        </div>
      </section>
    </>
  );
};

export default UploadVideo;
