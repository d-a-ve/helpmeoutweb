import { useContext } from "react";

import { VideoDetailsSetterContext } from "@context/VideoDetailsContext";

const useVideoSetter = () => {
  const setVideoDetails = useContext(VideoDetailsSetterContext);

  return { setVideoDetails };
};

export default useVideoSetter;
