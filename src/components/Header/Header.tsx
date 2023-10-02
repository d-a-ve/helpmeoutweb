import { useState } from "react";

import LinkPrimaryButton from "@components/Button/LinkPrimaryButton";
import LogoLight from "@components/Logo/LogoLight";
import ResponsiveNav from "@components/Nav/ResponsiveNav";

const Header = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <div className="py-8">
      <header>
        <div className="px-page-layout flex items-center justify-between relative pb-2">
          <a href="#">
            <LogoLight />
          </a>
          <div className="md:hidden">
            <ul className="flex gap-8 items-center">
              <li>
                <a href="#" className="header-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="header-link">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <LinkPrimaryButton to="/" buttonText="Get Started" />
          </div>
          <div
            className="hidden flex-col gap-1 cursor-pointer md:flex"
            onClick={() => setisNavOpen((prev) => !prev)}
          >
            <div
              className={`w-6 h-[3px] bg-primary transition duration-200  ${
                isNavOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] bg-primary transition-[width] duration-200 ${
                isNavOpen ? "w-0" : "w-6"
              }`}
            ></div>
            <div
              className={`w-6 h-[3px] bg-primary transition duration-200  ${
                isNavOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`bg-primary-50 hidden md:grid transition-[grid-template-rows] duration-300 ${
            isNavOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
          }`}
        >
          <ResponsiveNav />
        </div>
      </header>
    </div>
  );
};

export default Header;
