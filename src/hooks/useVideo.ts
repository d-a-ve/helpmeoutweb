import { useContext } from "react";

import { VideoContext } from "@context/VideoDetailsContext";

const useVideo = () => {
  const videoId = useContext(VideoContext);

  return { videoId };
};

export default useVideo;
