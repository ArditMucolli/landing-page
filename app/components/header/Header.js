import Image from "next/image";
import Link from "next/link";
import LanguageButton from "./LanguageButton";

export default function Header() {
  return (
    <header className="bg-white h-[90px]">
      <nav className="max-w-7xl mx-auto flex items-center p-4 justify-between h-full">
        <div className="flex items-center mr-8">
          <Image src="/assets/oneri.svg" alt="logo" width={106} height={26} />
        </div>

        <ul className="flex gap-x-2.5 justify-start space-x-6 text-gray-700">
          <li className="hover:text-blue-500">
            <Link href="#">About Us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#" className="flex items-center gap-1">
              Modules
              <Image src="/assets/icon.svg" alt="icon" width={14} height={14} />
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#">News</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#" className="flex items-center gap-1">
              Our Customers
              <Image src="/assets/icon.svg" alt="icon" width={14} height={14} />
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#">Testimonials</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="#">Contacts</Link>
          </li>
        </ul>

        <ul className="flex ml-auto justify-end items-center space-x-6 text-gray-700">
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
            <Image src="/assets/Frame.svg" alt="Frame" width={24} height={24} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
