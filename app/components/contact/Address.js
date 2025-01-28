import Image from "next/image";
import Link from "next/link";

export const Address = () => {
  return (
    <ul className="flex flex-col gap-14 text-gray-700 ml-5 mt-7">
      <li className=" flex items-center gap-6">
        <Image
          src="/assets/contact/map-pin.png"
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
          src="/assets/contact/send.png"
          alt="send"
          width={24}
          height={24}
        />
        <Link href={"www.oneri.de"} className="text-[#FFFFFF] text-[16px]">
          info@oneri.de
        </Link>
      </li>
      <li className=" flex items-center gap-6">
        <Image src="/assets/contact/web.png" alt="web" width={24} height={24} />
        <Link href={"www.oneri.de"} className="text-[#FFFFFF] text-[16px]">
          www.oneri.de
        </Link>
      </li>
    </ul>
  );
};
