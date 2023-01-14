import "./HomePage.scss";
import { useEffect, useState } from "react";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import VideoPlayerDiv from "../../components/VideoPlayerDiv/VideoPlayerDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const BASE_URL = "https://project-2-api.herokuapp.com";
  const API_KEY = "21fe8862-8c27-4e98-ac56-938eb70588eb";

  const [originalVideo, setOriginalVideo] = useState([]);
  const [videoThumbnail, setVideoThumbnail] = useState([]);
  let { videoId } = useParams();

  // let id = videoId || originalVideo.id;
  let id = videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";

  // console.log(videoId);

  // useEffect(() => {
  //   const getFirstMount = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${BASE_URL}/videos/?api_key=${API_KEY}`
  //       );
  //         // console.log(data);
          
  //       id = data[0].id;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getFirstMount();
  // }, []);

  useEffect(() => {
    const getOriginalVideo = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/videos/${id}?api_key=${API_KEY}`
        );

        setOriginalVideo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOriginalVideo();
  }, [id]);

  useEffect(() => {
    const getThumbnailVideo = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/videos/?api_key=${API_KEY}`
        );

        setVideoThumbnail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getThumbnailVideo();
  }, []);

 
    // console.log("VT:", videoThumbnail);

    return (
      <>
        <VideoPlayer defaultVideo={originalVideo} />
        <main className="main-section">
          <div className="main-section__content">
            <VideoPlayerDiv defaultVideo={originalVideo} />
            <Comments comments={originalVideo} />
          </div>
          <section className="next-vid-section">
            <NextVideo thumbnail={videoThumbnail} />
          </section>
        </main>
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
