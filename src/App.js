import "./App.scss";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import data from "../src/data/video-details.json";
// import shortData from "../src/data/videos.json";
import Header from "./components/Header/Header";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import VideoPlayerDiv from "./components/VideoPlayerDiv/VideoPlayerDiv";
// import Comments from "./components/Comments/Comments";
// import NextVideo from "./components/NextVideo/NextVideo";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  // const [vidDetails, setDefaultVid] = useState(data);
  // const [currentVid, setCurrentVid] = useState(vidDetails[0]);
  // const [nextVideos, setNextVideos] = useState(shortData);

  // function handlerFunc(e) {
  //   const newCurrentVid = vidDetails.find(
  //     (vid) => vid.id === e.currentTarget.id
  //   );
  //   setCurrentVid(newCurrentVid);

  //   const newArr = shortData.filter(
  //     (element) => element.id !== e.currentTarget.id
  //   );
  //   setNextVideos(newArr);
  // }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <VideoPlayer vid={currentVid} />
        <main className="main-section">
          <div className="main-section__content">
            <VideoPlayerDiv vid={currentVid} />
            <Comments comments={currentVid} />
          </div>
          <NextVideo shortVid={nextVideos} handler={handlerFunc} />
        </main> */}
      </BrowserRouter>
    </>
  );
}

export default App;
