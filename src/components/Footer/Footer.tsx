import { FOOTERLINKS } from "@constants";

import LogoDark from "@components/Logo/LogoDark";

import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-4 px-page-layout py-20 bg-primary items-start justify-between gap-x-12 gap-y-10 md:grid-cols-3 footer:grid-cols-2 xs:grid-cols-1">
        <div className="md:col-span-3 footer:col-span-2 xs:col-span-1">
          <LogoDark />
        </div>

        <FooterLinks links={FOOTERLINKS[0]} />
        <FooterLinks links={FOOTERLINKS[1]} />
        <FooterLinks links={FOOTERLINKS[2]} />
      </footer>
    </div>
  );
};

export default Footer;
