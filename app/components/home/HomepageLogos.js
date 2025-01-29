import Image from "next/image";

export default function HomepageLogos() {
  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <ul className="flex items-center gap-16 space-x-6 text-gray-700 mt-[74px]">
          <li>
            <Image
              src="/assets/oneri-home.svg"
              alt="ONERI"
              width={184.63}
              height={45.18}
            />
          </li>
          <li>
            <Image src="/assets/x.svg" alt="x" width={15.41} height={16.56} />
          </li>
          <li>
            <Image
              src="/assets/logo_e-world-2.svg"
              alt="Secondary Button"
              width={168}
              height={167}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
