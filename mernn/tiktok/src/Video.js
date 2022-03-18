import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video({ url, channel, description, song, shares, likes, messages }) {
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
        src={url}
      ></video>

      <VideoFooter
        description={description}
        channel={channel}
        song={song}
      ></VideoFooter>
      <Sidebar likes={likes} shares={shares} messages={messages}></Sidebar>
    </div>
  );
}

export default Video;
