"use client";
import { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative w-1/3 h-10">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search note..."
        className="w-full h-full pl-3 pr-10 border rounded-md border-primary focus:outline-none 
        dark:bg-bgDark dark:border-white dark:text-white placeholder-placeholder 
        dark:placeholder-gray-400"
      />
      <PiMagnifyingGlassLight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-white text-2xl" />
    </div>
  );
};

export default SearchBar;
