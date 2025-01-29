"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageButton from "./LanguageButton";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white h-[90px] dark:bg-black">
      <nav className="max-w-7xl mx-auto flex items-center p-4 justify-between h-full">
        <div className="flex items-center mr-8">
          <Image src="/assets/oneri.svg" alt="logo" width={106} height={26} />
        </div>

        <ul className="hidden md:flex gap-x-2.5 space-x-6 text-[#1D1D1F] dark:text-[#FFFFFF]">
          <li className="hover:text-blue-500">
            <Link href="#">About Us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#" className="flex items-center gap-1">
              Modules
              <Image
                src={
                  theme === "light"
                    ? "/assets/icon.svg"
                    : "/assets/dark-icon.svg"
                }
                alt="icon"
                width={14}
                height={14}
                className="ml-3"
              />
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#">News</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#" className="flex items-center gap-1">
              Our Customers
              <Image
                src={
                  theme === "light"
                    ? "/assets/icon.svg"
                    : "/assets/dark-icon.svg"
                }
                alt="icon"
                width={14}
                height={14}
                className="ml-3"
              />
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#">Testimonials</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#">Contacts</Link>
          </li>
        </ul>

        <ul className="hidden md:flex justify-end items-center space-x-6 text-gray-700">
          <li>
            <Image src="/assets/Group.svg" alt="Group" width={30} height={30} />
          </li>
          <li>
            <Image
              src="/assets/calendar.svg"
              alt="Appointment"
              width={40}
              height={40}
            />
          </li>
          <li>
            <LanguageButton />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block focus:outline-none"
        >
          <Image
            src="/assets/hamburger-menu.svg"
            alt="Hamburger Menu"
            width={30}
            height={30}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-screen h-[686px] z-50 bg-white dark:bg-black p-6 shadow-xl">
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/assets/x-black.svg"
              alt="Close Menu"
              width={24}
              height={24}
            />
          </button>

          <ul className="flex flex-col space-y-6 text-[#1D1D1F] dark:text-white text-lg">
            <li className="hover:text-blue-500">
              <Link href="#">About Us</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="#" className="flex items-center gap-1">
                Modules
                <Image
                  src={
                    theme === "light"
                      ? "/assets/icon.svg"
                      : "/assets/dark-icon.svg"
                  }
                  alt="icon"
                  width={14}
                  height={14}
                  className="ml-3"
                />
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="#">News</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="#" className="flex items-center gap-1">
                Our Customers
                <Image
                  src={
                    theme === "light"
                      ? "/assets/icon.svg"
                      : "/assets/dark-icon.svg"
                  }
                  alt="icon"
                  width={14}
                  height={14}
                  className="ml-3"
                />
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="#">Testimonials</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href="#">Contacts</Link>
            </li>
          </ul>

          <div className="absolute bottom-4 w-full px-6 flex justify-between items-center">
            <LanguageButton />
            <div className="mr-5">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
