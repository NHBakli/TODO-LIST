import DarkButton from "./DarkButton";
import SearchBar from "./SearchBar";
import CustomSelect from "./Select";

interface NavbarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onFilterChange }) => {
  return (
    <div className="flex justify-center items-center space-x-5 w-full py-4">
      <SearchBar onSearch={onSearch} />
      <CustomSelect onFilterChange={onFilterChange} />
      <DarkButton />
    </div>
  );
};

export default Navbar;
