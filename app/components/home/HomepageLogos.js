import Image from "next/image";

export default function HomepageLogos() {
  return (
    <div className="flex items-center justify-center h-full">
      <ul className="flex items-center gap-6 space-x-6 text-gray-700 mt-[74px] flex-wrap justify-center md:gap-16">
        <li>
          <Image
            src="/assets/oneri-home.svg"
            alt="ONERI"
            width={184.63}
            height={45.18}
            className="w-[94.07px] h-[23.02px] md:w-[184.63px] md:h-[45.18px]"
          />
        </li>
        <li>
          <Image
            src="/assets/x.svg"
            alt="x"
            width={15.41}
            height={16.56}
            className="w-[13.66px] h-[10.39px]md:w-[15.41px] md:h-[16.56px]"
          />
        </li>
        <li>
          <Image
            src="/assets/logo_e-world-2.svg"
            alt="Secondary Button"
            width={168}
            height={167}
            className="w-[86px] h-[85px] md:w-[168px] md:h-[167px]"
          />
        </li>
      </ul>
    </div>
  );
}
