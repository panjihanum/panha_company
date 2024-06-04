"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface DarkLightModeProps {
  className?: string;
}

const DarkLightMode: React.FC<DarkLightModeProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const handleToggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className={`fixed top-4 right-2 bg-transparent z-1 ${className}`}>
      <div className="flex justify-between items-center h-full">
        <button
          className={`bg-${isDarkMode ? "gray-700" : "white"} hover:bg-${
            isDarkMode ? "gray-800" : "gray-200"
          } text-${
            isDarkMode ? "white" : "gray-900"
          } rounded-lg flex items-end justify-end  transition-none`}
          onClick={handleToggleDarkMode}
        >
          {isDarkMode ? (
            <SunIcon className="w-5 h-5 mr-2 animate-spin transition-none" />
          ) : (
            <MoonIcon className="w-5 h-5 mr-2 transition-none" />
          )}
        </button>
      </div>
    </header>
  );
};

export default DarkLightMode;
