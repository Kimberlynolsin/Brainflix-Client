import { useState } from "react";
import data from "../src/data/video-details.json";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Comments from "./components/Comments/Comments";
import NextVideo from "./components/NextVideo/NextVideo";

function App() {
  const [vidData, setDefaultVid] = useState(data);
  const currentVid = vidData[0]

  function handlerFunc(e){

    const yolo = 'next-vid'=== e.target ? console.log(e.currentTarget): console.log('try again');
    
     console.log(yolo);
     
    
    // if( 'next-vid'=== e.currentTarget) {

    // }

    /*
    if div was clicked
      replace main video with currently clicked element
      
    */
  }

  function updateVideo(){
    
  }


  return (
    <>
      <Header />
      <VideoPlayer vid = {currentVid}/>
      <Comments comments = {currentVid}/>
      <NextVideo vidList={vidData} handler = {handlerFunc}/>
    </>
  );
}

export default App;
