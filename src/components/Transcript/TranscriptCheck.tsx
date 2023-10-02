import { useState } from "react";

import Button from "@components/Button/Button";

import Transcript from "./Transcript";

const TranscriptCheck = () => {
  const [isTranscriptShown, setIsTranscriptShown] = useState(false);
  return (
    <div>
      <Button
        className="bg-primary-300 px-4 py-2 text-white transition duration-200 hover:bg-primary-700"
        onClick={() => setIsTranscriptShown((prev) => !prev)}
      >{`${isTranscriptShown ? "Hide" : "Show"} transcript`}</Button>
      {isTranscriptShown && (
        <div className="mt-4">
          <Transcript />
        </div>
      )}
    </div>
  );
};

export default TranscriptCheck;
