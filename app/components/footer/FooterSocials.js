import Image from "next/image";
import Link from "next/link";

export default function FooterSocials() {
  return (
    <div className="mb-7 flex flex-col lg:flex-row items-start justify-between gap-4 mt-10 text-left w-full">
      <div className="flex-1">
        <Image
          src="/assets/oneri.png"
          alt="App Store"
          width={143}
          height={35}
        />
      </div>
      <div className="flex-1 text-[14px] text-[#6E6E73]">
        <p>© 2024 TECH FRAME Deutschland GmbH | www.tframe.de</p>
      </div>
      <div className="flex-1 flex justify-end ">
        <ul className="flex gap-5">
          <li>
            <Link href={"https://www.facebook.com/"}>
              <Image
                src="/assets/footer/facebook.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/"}>
              <Image
                src="/assets/footer/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/"}>
              <Image
                src="/assets/footer/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.youtube.com/"}>
              <Image
                src="/assets/footer/youtube.svg"
                alt="youtube"
                width={30}
                height={30}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
