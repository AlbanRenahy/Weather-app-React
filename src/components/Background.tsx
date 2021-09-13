import React from "react";

const video = require('../../src/images/video.mov');

const Background = () => {
  return (
      <div className="video-container">
        <video
          src={video}
          autoPlay
          muted
          loop
        ></video>
      </div>
  );
};

export default Background;