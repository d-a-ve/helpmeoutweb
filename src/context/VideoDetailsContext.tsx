import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const VideoContext = createContext({} as string);
export const VideoSetterContext = createContext<
  Dispatch<SetStateAction<string>>
>(undefined as unknown as Dispatch<SetStateAction<string>>);

const VideoContextProvider = ({ children }: { children: ReactNode }) => {
  const [videoId, setVideoId] = useState("");

  return (
    <VideoContext.Provider value={videoId}>
      <VideoSetterContext.Provider value={setVideoId}>
        {children}
      </VideoSetterContext.Provider>
    </VideoContext.Provider>
  );
};

export default VideoContextProvider;
