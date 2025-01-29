"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function FooterInfos() {
  const { theme } = useTheme();

  return (
    <div className="w-full min-h-[372px] flex justify-center items-center">
      <div className="w-full max-w-[1200px]">
        <div className="hidden lg:flex justify-between">
          {/* Desktop Layout */}
          <div className="flex-1 text-left">
            <h1 className="text-[16px] text-[#1D1D1F] dark:text-[#6C1EB0] font-medium mb-4">
              Useful Links
            </h1>
            <div className="text-[14px] text-[#6E6E73] dark:text-[#FFFFFF] flex flex-col gap-5">
              <p>About Us</p>
              <p>Modules</p>
              <p>News</p>
              <p>Contacts</p>
            </div>
          </div>

          <div className="flex-1 text-left">
            <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4 dark:text-[#6C1EB0]">
              Legal
            </h1>
            <div className="text-[14px] text-[#6E6E73] dark:text-[#FFFFFF] flex flex-col gap-5">
              <p>Imprint</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3 text-left mt-10">
            <Image
              src={
                theme === "light"
                  ? "/assets/footer/app-store.svg"
                  : "/assets/footer/app-store-dark.svg"
              }
              alt="icon"
              width={100}
              height={28.05}
            />
            <Image
              src={
                theme === "light"
                  ? "/assets/footer/play-store.svg"
                  : "/assets/footer/play-store-dark.svg"
              }
              alt="Play Store"
              width={100}
              height={28.05}
            />
          </div>

          <div className="flex-1 text-left">
            <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4">
              Subscribe
            </h1>
            <label
              htmlFor="email"
              className="text-[14px] text-[#6E6E73] dark:text-[#FFFFFF] font-medium"
            >
              Join our community to receive updates
            </label>
            <div className="mt-3 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                className="px-4 py-2 w-[240px] h-[38px] dark:bg-[#FFFFFF] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="w-[106px] h-[38px] text-[14px] text-white bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] rounded-full"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-[14px] text-[#6E6E73] font-medium dark:text-[#FFFFFF]">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="p-10 grid grid-cols-2 gap-2 lg:hidden">
          <div>
            <h1 className="text-[16px] text-[#1D1D1F] dark:text-[#6C1EB0] font-medium mb-4">
              Useful Links
            </h1>
            <div className="text-[14px] text-[#6E6E73] dark:text-[#FFFFFF] flex flex-col gap-2">
              <p>About Us</p>
              <p>Modules</p>
              <p>News</p>
              <p>Contacts</p>
            </div>
          </div>

          <div>
            <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4 dark:text-[#6C1EB0]">
              Legal
            </h1>
            <div className="text-[14px] text-[#6E6E73] dark:text-[#FFFFFF] flex flex-col gap-2">
              <p>Imprint</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>

          <div>
            <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4">
              Subscribe
            </h1>
            <label
              htmlFor="email"
              className="text-[14px] text-[#6E6E73] dark:text-[#FFFFFF] font-medium"
            >
              Join our community to receive updates
            </label>
            <div className="mt-10 flex items-center space-x-3">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                className="flex-grow px-4 py-2 dark:bg-[#FFFFFF] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className=" w-[106px] text-[14px] h-[38px] text-white bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] rounded-full flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-0">
            <Image
              src={
                theme === "light"
                  ? "/assets/footer/app-store.svg"
                  : "/assets/footer/app-store-dark.svg"
              }
              alt="App Store"
              width={100}
              height={28.05}
            />
            <Image
              src={
                theme === "light"
                  ? "/assets/footer/play-store.svg"
                  : "/assets/footer/play-store-dark.svg"
              }
              alt="Play Store"
              width={100}
              height={28.05}
            />
          </div>
        </div>

        <p className="md:hidden mb-10 ml-10 text-[14px] text-[#6E6E73] font-medium dark:text-[#FFFFFF]">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </div>
  );
}
