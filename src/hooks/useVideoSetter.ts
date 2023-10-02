import { useContext } from "react";

import { VideoSetterContext } from "@context/VideoDetailsContext";

const useVideoSetter = () => {
  const setVideoId = useContext(VideoSetterContext);

  return { setVideoId };
};

export default useVideoSetter;
