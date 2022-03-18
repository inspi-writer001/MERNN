import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      {/* <h1>LET'S BUILD A FULLSTACK MERN APP💥💥💥</h1> */}
      <div className="app__videos">
        <Video
          url="https://v16-webapp.tiktok.com/5deda0526555f2ae2e8ce74663458630/62341f1f/video/tos/useast2a/tos-useast2a-ve-0068c004/d2fae82d468f42a6b0ea8fddfa3f3b04/?a=1988&br=1286&bt=643&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7ThKitiDXq&l=20220317235636010192166075057812EA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZqcGY6Znl0OzMzNzczM0ApOTU0ZWc2ZWVmN2llZzg4NWcyMGBmcjQwbF9gLS1kMTZzczMzNDJfX2AzX2IzMGFiLy46Yw%3D%3D&vl=&vr="
          messages={2}
          likes={4}
          channel={"errrrd344"}
          song={"Johnny on the eee"}
          shares={3}
        />

        <Video url="https://v16-webapp.tiktok.com/5deda0526555f2ae2e8ce74663458630/62341f1f/video/tos/useast2a/tos-useast2a-ve-0068c004/d2fae82d468f42a6b0ea8fddfa3f3b04/?a=1988&br=1286&bt=643&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7ThKitiDXq&l=20220317235636010192166075057812EA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZqcGY6Znl0OzMzNzczM0ApOTU0ZWc2ZWVmN2llZzg4NWcyMGBmcjQwbF9gLS1kMTZzczMzNDJfX2AzX2IzMGFiLy46Yw%3D%3D&vl=&vr=" />
      </div>
    </div>
  );
}

export default App;
