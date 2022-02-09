import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [playing, SetPlaying] = useState(false);
  const handleVideoPress = () => {
    //if video is playing, stop it
    if (playing) {
      videoRef.current.pause();
      SetPlaying(false);
    } else {
      videoRef.current.play();
      SetPlaying(true);
    }
    //play video
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/e4419371e98cc5f3c12acf70326df0fb/6203fd71/video/tos/useast2a/tos-useast2a-ve-0068c003/692bf221ec9947fc8f342a65b45be325/?a=1988&br=2584&bt=1292&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7Th5_coDXq&l=202202091143170102230760370C10ED18&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k2ODc6ZmdvOjMzNzczM0ApNGg8MzRpNDw6Nzc8NTxpOWdqLmYwcjRnZGxgLS1kMTZzczYyL2EtNjE1NTEyNDVjMWA6Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter
        description={"some cool shit"}
        channel={"Inspiration"}
        song={"React and NodeJs stuff by the drills"}
      ></VideoFooter>
      <Sidebar likes={0} shares={0} messages={0}></Sidebar>
    </div>
  );
}

export default Video;
