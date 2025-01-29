import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Image
        src={theme === "light" ? "/assets/Frame.svg" : "/assets/FrameDark.svg"}
        alt="Theme Toggle"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default ThemeToggle;
