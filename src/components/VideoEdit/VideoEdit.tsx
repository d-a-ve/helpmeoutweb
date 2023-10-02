import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";

import useModalSetter from "@hooks/useModalSetter";

import Button from "@components/Button/Button";
import ButtonWithIcon from "@components/Button/ButtonWithIcon";
import CopyIcon from "@components/Icons/CopyIcon";
import Input from "@components/Input/Input";
import TransparentInput from "@components/Input/TransparentInput";
import Modal from "@components/Modal/Modal";
import Transcript from "@components/Transcript/Transcript";
import TranscriptCheck from "@components/Transcript/TranscriptCheck";

import VideoPlayer from "./VideoPlayer";

const SOCIALS = [
  {
    name: "facebook",
    imgUrl: "assets/svg/facebook.svg",
  },
  {
    name: "whatsApp",
    imgUrl: "assets/svg/whatsapp.svg",
  },
  {
    name: "telegram",
    imgUrl: "assets/svg/telegram.svg",
  },
];

const VideoEdit = () => {
  const { videoId } = useParams();
  const [test, setTest] = useState(false);
  const { setIsModalOpen } = useModalSetter();
  const isLaptop = useMediaQuery({ maxDeviceWidth: 1024 });

  // useEffect()
  console.log(isLaptop);

  return (
    <section className="px-page-layout flex gap-x-10 lg:flex-col">
      <button onClick={() => setTest((prev) => !prev)}>
        {test ? "Show" : "hide"}
      </button>
      <div className="w-1/2 lg:w-full flex flex-col gap-8">
        <h1 className="text-primary-700 text-h4">Your video is ready!</h1>
        <Modal />
        <TransparentInput />

        <div>
          <Input
            name="email"
            inputType="email"
            placeholder="Enter email of receiver..."
            className="bg-primary-50 w-full text-primary placeholder:text-slate-500 outline-none border-2 border-transparent focus:border-primary "
          >
            <Button
              className="bg-primary-300 px-4 py-2 text-white transition duration-200 hover:bg-primary-700"
              onClick={() => setIsModalOpen((prev) => !prev)}
            >
              Send
            </Button>
          </Input>
        </div>

        {isLaptop && (
          <div className="w-1/2 lg:w-full flex flex-col gap-12">
            <VideoPlayer />
            <TranscriptCheck />
          </div>
        )}

        <div>
          <Input
            label="Video Url"
            labelClassName="text-primary-700 font-semibold mb-2"
            name="email"
            inputType="email"
            value="https://github.com/d-a-ve"
            disabled
            className="bg-primary-50 w-full text-primary placeholder:text-slate-500 outline-none border-2 border-transparent sm:pr-[50px] focus:border-primary "
          >
            <ButtonWithIcon
              className="btn-secondary-wrp py-2 px-5 sm:px-3"
              buttonText="Copy"
              buttonTextClassName="ml-2 sm:hidden"
              icon={<CopyIcon />}
            />
          </Input>
        </div>

        <div>
          <p className="font-semibold mb-2">Share your video</p>
          <div className="flex sm:flex-col gap-4">
            {SOCIALS.map(({ name, imgUrl }, i) => (
              <ButtonWithIcon
                className="btn-secondary sm:w-full"
                key={i}
                buttonText={name}
                iconUrl={imgUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {!isLaptop && (
        <div className="w-1/2 lg:w-full flex flex-col gap-12">
          <VideoPlayer />
          <Transcript />
        </div>
      )}
    </section>
  );
};

export default VideoEdit;
