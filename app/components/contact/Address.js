import Image from "next/image";
import Link from "next/link";

export const Address = () => {
  return (
    <ul className="flex flex-col gap-14 text-gray-700  md:mt-7 mt-12">
      <li className="flex items-center gap-6 hidden md:flex">
        <Image
          src="/assets/contact/map-pin.svg"
          alt="map-pin"
          width={24}
          height={24}
        />
        <Link href={"www.oneri.de"} className="text-[#FFFFFF] text-[16px]">
          Höhenrainer Str. 5, 81477 München, Germany
        </Link>
      </li>

      <li className=" flex items-center gap-6">
        <Image
          src="/assets/contact/send.svg"
          alt="send"
          width={24}
          height={24}
        />
        <Link href={"www.oneri.de"} className="text-[#FFFFFF] text-[16px]">
          info@oneri.de
        </Link>
      </li>
      <li className=" flex items-center gap-6">
        <Image src="/assets/contact/web.svg" alt="web" width={24} height={24} />
        <Link href={"www.oneri.de"} className="text-[#FFFFFF] text-[16px]">
          www.oneri.de
        </Link>
      </li>
    </ul>
  );
};
