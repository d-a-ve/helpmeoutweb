import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { TVideoDetails } from "@myTypes/TVideoDetails";

export const VideoDetailsContext = createContext(
  {} as TVideoDetails | undefined
);
export const VideoDetailsSetterContext = createContext<
  Dispatch<SetStateAction<TVideoDetails | undefined>>
>(undefined as unknown as Dispatch<SetStateAction<TVideoDetails | undefined>>);

const VideoDetailsContextProvider = ({ children }: { children: ReactNode }) => {
  const [videoDetailsId, setVideoDetailsId] = useState<TVideoDetails>();

  return (
    <VideoDetailsContext.Provider value={videoDetailsId}>
      <VideoDetailsSetterContext.Provider value={setVideoDetailsId}>
        {children}
      </VideoDetailsSetterContext.Provider>
    </VideoDetailsContext.Provider>
  );
};

export default VideoDetailsContextProvider;
