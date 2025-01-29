"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function FooterSocials() {
  const { theme } = useTheme();

  return (
    <div className="mb-7 flex flex-col lg:flex-row items-start justify-between gap-4 mt-10 text-left w-full">
      <div className="flex-1">
        <Image
          src="/assets/oneri.svg"
          alt="App Store"
          width={143}
          height={35}
        />
      </div>
      <div className="flex-1 text-[14px] text-[#6E6E73] dark:text-[#6E6E73]">
        <p>© 2024 TECH FRAME Deutschland GmbH | www.tframe.de</p>
      </div>
      <div className="flex-1 flex justify-end ">
        <ul className="flex gap-5">
          <li>
            <Link href={"https://www.facebook.com/"}>
              <Image
                src={
                  theme === "light"
                    ? "/assets/footer/facebook.svg"
                    : "/assets/icons/facebook.svg"
                }
                alt="icon"
                width={30}
                height={30}
                className="ml-3"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/"}>
              <Image
                src={
                  theme === "light"
                    ? "/assets/footer/instagram.svg"
                    : "/assets/icons/instagram.svg"
                }
                alt="icon"
                width={30}
                height={30}
                className="ml-3"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/"}>
              <Image
                src={
                  theme === "light"
                    ? "/assets/footer/linkedin.svg"
                    : "/assets/icons/linkedin.svg"
                }
                alt="icon"
                width={30}
                height={30}
                className="ml-3"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.youtube.com/"}>
              <Image
                src={
                  theme === "light"
                    ? "/assets/footer/youtube.svg"
                    : "/assets/icons/youtube.svg"
                }
                alt="icon"
                width={30}
                height={30}
                className="ml-3"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
