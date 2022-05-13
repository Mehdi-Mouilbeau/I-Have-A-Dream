import React from "react";
import "./video.css";

export default function Video() {
  return (
    <div className="videocss">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bkkIaVnlRfE?autoplay=1&playlist=bkkIaVnlRfE&loop=1"
        title="YouTube video player"
        frameBorder="0"
        mute="1"
        loop="1"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
