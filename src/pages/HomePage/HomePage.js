import "./HomePage.scss";
import { useEffect, useState } from "react";
import data from "../../data/video-details.json";
import shortData from "../../data/videos.json";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comments from "../../components/Comments/Comments";
import VideoPlayerDiv from "../../components/VideoPlayerDiv/VideoPlayerDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";

function HomePage() {
  // const [vidDetails, setDefaultVid] = useState(data);
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
  const URL =
    "https://project-2-api.herokuapp.com/videos?api_key=b694f26b-0dfd-4f61-bd97-068859087909";
  const [comments, setComments] = useState(null);
  // const [currentVid, setCurrentVid] = useState(vidDetails[0]);

  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios.get(URL);

      setComments(data);
    };

    getComments();
  }, []);

  const commentsList = comments ? (
    comments.map((element) => {
      // console.log('line43:',element.id);
      return (
        <>
          <NextVideo
            key={element.id}
            index={element.id}
            title={element.title}
            channel={element.channel}
            img={element.image}
          />
        </>
      );
    })
  ) : (
    <p>Loading...</p>
  );

  // console.table("in home", comments);
  return (
    <>
      {/* <VideoPlayer vid={comments} /> */}
      <main className="main-section">
        <div className="main-section__content">
          {/* <VideoPlayerDiv vid={currentVid} /> */}
          {/* <Comments comments={currentVid} /> */}
        </div>
        {/* <NextVideo shortVid={comments} handler={handlerFunc} /> */}
        <section className="next-vid-section">
          <p className="next-vid-section__title">next videos</p>
          {commentsList}
        </section>
      </main>
    </>
  );
}

export default HomePage;
