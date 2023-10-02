import SearchIcon from "@components/Icons/SearchIcon";
import Input from "@components/Input/Input";

const DeashboardWelcome = () => {
  return (
    <div className="flex px-page-layout items-center justify-between">
      <div>
        <h1 className="text-h3 text-primary-700">Hello, David Aronmwan</h1>
        <p className="text-gray-600">Here are your videos</p>
      </div>
      <div className="relative">
        <div>
          <SearchIcon />
        </div>
        <Input inputType="text" name="search" />
      </div>
    </div>
  );
};

export default DeashboardWelcome;
