import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Dialog } from "@headlessui/react";

const languages = [
  { name: "English", code: "ENG", flag: "/assets/uk.svg" },
  { name: "Deutsch", code: "DEU", flag: "/assets/germany.svg" },
  { name: "French", code: "FRA", flag: "/assets/france.svg" },
];

export default function LanguageButton() {
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(JSON.parse(savedLanguage));
    }
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", JSON.stringify(language));
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        className="w-[101px] h-[40px] rounded-3xl inline-flex items-center justify-center border border-[#1D1D1F] px-4 py-2 text-sm font-medium text-gray-700 dark:border-[#FFFFFF]"
        onClick={toggleDropdown}
      >
        <Image
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name} Flag`}
          width={16}
          height={16}
          className="mr-2"
        />
        <p className="text-[14px] text-[#1D1D1F] dark:text-[#FFFFFF]">
          {selectedLanguage.code}
        </p>
        <Image
          src={theme === "light" ? "/assets/icon.svg" : "/assets/dark-icon.svg"}
          alt="icon"
          width={14}
          height={14}
          className="ml-3"
        />
      </button>

      {/* Desktop Dropdown */}
      {!isMobile && isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-[150px] bg-white dark:bg-[#1D1D1F] border border-[#1D1D1F] rounded-lg shadow-lg z-50">
          <ul className="p-2">
            {languages.map((language) => (
              <li
                key={language.code}
                className="text-sm text-[#1D1D1F] dark:text-white p-2 hover:bg-gray-200 dark:hover:bg-[#333] cursor-pointer"
                onClick={() => handleSelectLanguage(language)}
              >
                <Image
                  src={language.flag}
                  alt={`${language.name} Flag`}
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Modal */}
      {isMobile && (
        <Dialog open={isDropdownOpen} onClose={() => setIsDropdownOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed inset-x-0 bottom-0 bg-white dark:bg-[#1D1D1F] rounded-t-lg p-4">
              <h2 className="text-lg text-center text-[#1D1D1F] dark:text-white mb-4">
                Select Language
              </h2>
              <ul>
                {languages.map((language) => (
                  <li
                    key={language.code}
                    className="text-sm text-[#1D1D1F] dark:text-white p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                    onClick={() => handleSelectLanguage(language)}
                  >
                    <Image
                      src={language.flag}
                      alt={`${language.name} Flag`}
                      width={16}
                      height={16}
                      className="inline mr-2"
                    />
                    {language.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
