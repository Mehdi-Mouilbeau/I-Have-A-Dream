import React from "react";
import ReactPlayer from "react-player/youtube";

export default function Video() {
  return (
    <div>
      <ReactPlayer
        controls
        playing
        muted
        loop
        width="100%"
        url="https://www.youtube.com/watch?v=bkkIaVnlRfE"
      />
    </div>
  );
}
