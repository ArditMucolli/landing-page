import Image from "next/image";
import { useTheme } from "next-themes";

export default function LanguageButton() {
  const { theme } = useTheme();
  return (
    <button
      type="button"
      className="w-[101px] h-[40px] rounded-3xl inline-flex items-center justify-center border border-[#1D1D1F] px-4 py-2 text-sm font-medium text-gray-700 dark:border-[#FFFFFF]"
    >
      <Image
        src="/assets/uk.svg"
        alt="UK Flag"
        width={16}
        height={16}
        className="mr-2"
      />
      <p className="text-[14px] text-[#1D1D1F] dark:text-[#FFFFFF]">ENG</p>
      <Image
        src={theme === "light" ? "/assets/icon.svg" : "/assets/dark-icon.svg"}
        alt="icon"
        width={14}
        height={14}
        className="ml-3"
      />
    </button>
  );
}
