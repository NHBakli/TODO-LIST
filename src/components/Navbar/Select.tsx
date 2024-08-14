"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect: React.FC = () => {
  const [selected, setSelected] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "All", label: "All" },
    { value: "Complete", label: "Complete" },
    { value: "Incomplete", label: "Incomplete" },
  ];

  return (
    <div className="relative w-32 h-10">
      <button
        type="button"
        className="w-full h-full bg-primary hover:bg-secondary text-white font-bold rounded-md shadow-sm pl-2 pr-2 text-left focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {options.find((option) => option.value === selected)?.label}
        </span>
        <IoIosArrowDown className="ml-2 text-xl" />
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`select-none relative py-2 pl-3 pr-2 text-primary font-bold cursor-pointer ${
                option.value === selected ? "text-primary" : "text-gray-900"
              } hover:bg-secondary hover:bg-opacity-20 hover:text-primary`}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
            >
              <span className="block truncate">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
