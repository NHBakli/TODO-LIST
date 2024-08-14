import DarkButton from "./DarkButton";
import SearchBar from "./SearchBar";
import Select from "./Select";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center space-x-5 w-full py-4">
      <SearchBar />
      <Select />
      <DarkButton />
    </div>
  );
};

export default Navbar;
