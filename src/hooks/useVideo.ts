import { useContext } from "react";

import { VideoDetailsContext } from "@context/VideoDetailsContext";

const useVideo = () => {
  const videoDetails = useContext(VideoDetailsContext);

  return { videoDetails };
};

export default useVideo;
