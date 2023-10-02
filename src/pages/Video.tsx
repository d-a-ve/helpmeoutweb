import { Link } from "react-router-dom";

import ModalContextProvider from "@context/ModalContext";
import VideoContextProvider from "@context/VideoDetailsContext";

import Button from "@components/Button/PrimaryButton";
import CenterSection from "@components/Section/CenterSection";
import VideoEdit from "@components/VideoEdit/VideoEdit";

const Video = () => {
  return (
    <VideoContextProvider>
      <ModalContextProvider>
        <VideoEdit />
      </ModalContextProvider>

      <CenterSection className="bg-[#f4f4ff] py-12 my-12">
        <div className="max-w-lg mx-auto text-center">
          <p className="mb-6 font-semibold">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </p>
          <Button buttonText="Save Video" />

          <p className="mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/auth" className="decoration">
              Create account
            </Link>
          </p>
        </div>
      </CenterSection>
    </VideoContextProvider>
  );
};

export default Video;
