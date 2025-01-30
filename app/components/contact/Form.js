"use client";

import { useState, useEffect } from "react";

export default function Form() {
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setMounted(true);

    const preferredScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setColorScheme(preferredScheme);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`sm:ml-4 ml-2 sm:mt-10 mt-4 md:mt-0 max-w-[900px] mx-auto`}>
      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                className="mt-2 px-4 py-2 w-full sm:w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-[#FFFFFF]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="employees"
                className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
              >
                Number of Employees
              </label>
              <input
                type="number"
                placeholder="Number of Employees"
                id="employees"
                name="employees"
                className="dark:bg-[#FFFFFF] mt-2 px-4 py-2 w-full sm:w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="dark:bg-[#FFFFFF] text-[#979797] mt-2 px-4 py-2 w-full sm:w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <div className="space-y-4">
                <label
                  htmlFor="english"
                  className="text-[14px] text-[#484848] dark:text-[#FFFFFF] block"
                >
                  Demo Language
                </label>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="english"
                      name="language"
                      value="buenos-aires"
                      className="mr-2"
                      required
                    />
                    <label
                      htmlFor="english"
                      className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
                    >
                      EN
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="german"
                      name="language"
                      value="sydney"
                      className="mr-2"
                      required
                    />
                    <label
                      htmlFor="german"
                      className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
                    >
                      DE
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label
                htmlFor="company"
                className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
              >
                Company
              </label>
              <input
                type="text"
                placeholder="Company Name"
                id="company"
                name="company"
                className="dark:bg-[#FFFFFF] mt-2 px-4 py-2 w-full sm:w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                className="dark:bg-[#FFFFFF] mt-2 px-4 py-2 w-full sm:w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-[14px] text-[#484848] dark:text-[#FFFFFF]"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="4"
                className="dark:bg-[#FFFFFF] mt-2 px-4 py-2 w-full sm:w-[314px] h-[200px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex sm:justify-end justify-start">
          <button
            type="submit"
            className="w-full sm:w-[314px] h-[50px] text-white bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] rounded-full self-end"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
