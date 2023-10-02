import LinkPrimaryButton from "@components/Button/LinkPrimaryButton";

const ResponsiveNav = () => {
  return (
    <nav className="w-full px-page-layout overflow-hidden">
      <ul className="flex flex-col">
        <li>
          <a href="#" className="responsive-header-link">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="responsive-header-link">
            How It Works
          </a>
        </li>
        <li className="mt-2">
          <LinkPrimaryButton
            to="/"
            buttonText="Get Started"
            className="w-full"
          />
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
