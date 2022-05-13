import React from "react";
import "./video.css";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div className="videocss">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bkkIaVnlRfE"
        muted
        playing
        controls={false}
        loop
      />
    </div>
  );
}
