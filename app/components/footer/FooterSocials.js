"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Hr from "../Hr";

export default function FooterSocials() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the client-side flag to true when component mounts
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div className="mb-7 mt-10 w-full">
        {/* Desktop */}
        <div className="hidden lg:flex justify-between gap-4 text-left">
          <div className="flex-1">
            <Image
              src="/assets/oneri.svg"
              alt="oneri"
              width={143}
              height={35}
            />
          </div>
          <div className="flex-1 text-[14px] text-[#6E6E73] dark:text-[#6E6E73]">
            <p>© 2024 TECH FRAME Deutschland GmbH | www.tframe.de</p>
          </div>
          <div className="flex-1 flex justify-end">
            <ul className="flex gap-5">
              <li>
                <Link href="https://www.facebook.com/">
                  <Image
                    src={
                      theme === "light"
                        ? "/assets/footer/facebook.svg"
                        : "/assets/icons/facebook.svg"
                    }
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <Image
                    src={
                      theme === "light"
                        ? "/assets/footer/instagram.svg"
                        : "/assets/icons/instagram.svg"
                    }
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">
                  <Image
                    src={
                      theme === "light"
                        ? "/assets/footer/linkedin.svg"
                        : "/assets/icons/linkedin.svg"
                    }
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/">
                  <Image
                    src={
                      theme === "light"
                        ? "/assets/footer/youtube.svg"
                        : "/assets/icons/youtube.svg"
                    }
                    alt="YouTube"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col items-center gap-4 text-left mx-auto max-w-[90%]">
          <Hr className={"w-full mb-10"} />
          <div className="flex flex-row gap-10 items-center justify-center mb-7">
            <div className="flex-1">
              <Image
                src="/assets/oneri.svg"
                alt="App Store"
                width={143}
                height={35}
              />
            </div>
            <div className="flex justify-center items-center gap-5">
              <Link href="https://www.facebook.com/">
                <Image
                  src={
                    theme === "light"
                      ? "/assets/footer/facebook.svg"
                      : "/assets/icons/facebook.svg"
                  }
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image
                  src={
                    theme === "light"
                      ? "/assets/footer/instagram.svg"
                      : "/assets/icons/instagram.svg"
                  }
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.linkedin.com/">
                <Image
                  src={
                    theme === "light"
                      ? "/assets/footer/linkedin.svg"
                      : "/assets/icons/linkedin.svg"
                  }
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.youtube.com/">
                <Image
                  src={
                    theme === "light"
                      ? "/assets/footer/youtube.svg"
                      : "/assets/icons/youtube.svg"
                  }
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <Hr className={"w-full"} />
          <div className="mt-4 text-[14px] text-[#6E6E73] dark:text-[#6E6E73] text-center">
            <p>© 2024 TECH FRAME Deutschland GmbH</p>
            <p>www.tframe.de</p>
          </div>
        </div>
      </div>
    </>
  );
}
