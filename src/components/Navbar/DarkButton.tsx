"use client";
import { useState, useEffect } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { IoMoonOutline } from "react-icons/io5";

const DarkButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center h-10 w-10 p-2 rounded-md bg-primary hover:bg-secondary text-white"
    >
      {darkMode ? <HiOutlineSun size={24} /> : <IoMoonOutline size={24} />}
    </button>
  );
};

export default DarkButton;
