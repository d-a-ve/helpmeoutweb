import React from "react";

import Button from "@components/Button/Button";
import ButtonWithIcon from "@components/Button/ButtonWithIcon";
import CopyIcon from "@components/Icons/CopyIcon";
import Input from "@components/Input/Input";
import TransparentInput from "@components/Input/TransparentInput";

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

const VideoEditLeftPanel = () => {
  return (
    <div>
      <h1 className="text-primary-700 text-h4 mb-4">Your video is ready!</h1>
      <div>
        <form className="flex flex-col gap-y-12">
          <TransparentInput />

          <div className="-mt-4">
            <Input
              name="email"
              inputType="email"
              placeholder="Enter email of receiver..."
              className="bg-primary-50 w-full text-primary placeholder:text-slate-500 outline-none border-2 border-transparent focus:border-primary "
            >
              <Button className="bg-primary-300 px-4 py-2 text-white transition duration-200 hover:bg-primary-700">
                Send
              </Button>
            </Input>
          </div>

          <div>
            <Input
              label="Video Url"
              labelClassName="text-primary-700 font-semibold mb-2"
              name="email"
              inputType="email"
              value="https://github.com/d-a-ve"
              disabled
              className="bg-primary-50 w-full text-primary placeholder:text-slate-500 outline-none border-2 border-transparent focus:border-primary "
            >
              <ButtonWithIcon
                className="btn-secondary-wrp py-2 px-5"
                buttonText="Copy"
                icon={<CopyIcon />}
              />
            </Input>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <p className="font-semibold mb-2">Share your video</p>
        <div className="flex gap-4">
          {SOCIALS.map(({ name, imgUrl }, i) => (
            <ButtonWithIcon
              className="btn-secondary"
              key={i}
              buttonText={name}
              iconUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoEditLeftPanel;
