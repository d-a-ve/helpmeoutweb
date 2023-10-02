import useVideo from "@hooks/useVideo";

const VideoPlayer = () => {
  const { videoDetails } = useVideo();
  return (
    <video
      controls
      width="100%"
      // height="440" /* autoplay="true" */ /* muted="true" */ /* loop="true" */ /* preload="metadata" */ /* crossorigin="anonymous" */
      /* poster="my_video_poster.png" */
      /* width="250" height="150" */
    >
      <source src="my_video.mp4" type="video/mp4" />
      <source src={videoDetails?.downloadLink} type="video/webm" />
      <source src="my_video.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default VideoPlayer;
