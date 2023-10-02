import React from "react";

const VideoPlayer = () => {
  return (
    <video
      controls
      width="100%"
      // height="440" /* autoplay="true" */ /* muted="true" */ /* loop="true" */ /* preload="metadata" */ /* crossorigin="anonymous" */
      /* poster="my_video_poster.png" */
      /* width="250" height="150" */
    >
      <source src="my_video.mp4" type="video/mp4" />
      <source
        src="https://martdev.tech/screenrecorder/api/videos/651a77e2bfdef94873eed0f5/stream"
        type="video/webm"
      />
      <source src="my_video.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default VideoPlayer;
