import "./HomePage.scss";
import { useEffect, useState } from "react";
// import data from "../../data/video-details.json";
// import shortData from "../../data/videos.json";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import VideoPlayerDiv from "../../components/VideoPlayerDiv/VideoPlayerDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function HomePage() {
  const URL =
    "https://project-2-api.herokuapp.com/videos?api_key=21fe8862-8c27-4e98-ac56-938eb70588eb";

  const [originalVideo, setOriginalVideo] = useState([]);
  const {videoId} = useParams()

  useEffect(() => {
    const getOriginalVideo = async () => {
      const { data } = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=21fe8862-8c27-4e98-ac56-938eb70588eb`
        
      );
      // console.log('IN USE EFFECT',data);
      
      setOriginalVideo(data);
    };
    getOriginalVideo();
 
  }, [videoId]);
  return (
    <>
      <VideoPlayer defaultVideo={originalVideo} />
      {/* <main className="main-section">
          <div className="main-section__content"> */}
      <VideoPlayerDiv defaultVideo={originalVideo} />
      <Comments comments={originalVideo} />
      {/* </div> */}
      {/* <section className="next-vid-section"> */}
      {/* <NextVideo
          comments={comments}
          parameter={nextVideoId}
        /> */}
      {/* </section> */}
      {/* </main> */}
    </>
  );
}

export default HomePage;

/*
make api get request, return video[0]  (useState)
setup params for next video
have conditional to check if id exist and if it doesnt come back to default vid
  // useEffect(() => {
  //   const getComments = async () => {
  //     const { data } = await axios.get(URL);
  //     setComments(data);
  //   };

  //   getComments();
  // }, [params]);

  // console.log("homepage",comments[0].id);


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


     
    // call URL and get all videos, call this `arrayOfVideos`
    // now extract the `videoId` object from this, call this `specificVideo`
    // NOW `arrayOfVideos2` is the original list MINUS `videoId`
    // now you have the video to display AND the tailored list of Next Videos

*/
