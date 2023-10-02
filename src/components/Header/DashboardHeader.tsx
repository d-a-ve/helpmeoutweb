import ArrowDownIcon from "@components/Icons/ArrowDownIcon";
import ProfileIcon from "@components/Icons/ProfileIcon";
import LogoLight from "@components/Logo/LogoLight";

const DashboardHeader = () => {
  return (
    <div className="py-8">
      <header className="px-page-layout flex items-center justify-between relative pb-2">
        <div>
          <a href="#">
            <LogoLight />
          </a>
        </div>
        <div className="flex gap-2">
          <span className="block w-8 h-8">
            <ProfileIcon />
          </span>
          <p className="text-black">David Aronmwan</p>
          <span className="block w-4 h-4">
            <ArrowDownIcon />
          </span>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
