import Image from "next/image";

export default function Homepageicons() {
  return (
    <div className="flex justify-center md:mt-16 mt-8">
      <ul className="flex items-center space-x-6 text-gray-700">
        <li>
          <Image
            src="/assets/icons/facebook.svg"
            alt="Group"
            width={24}
            height={24}
          />
        </li>
        <li>
          <Image
            src="/assets/icons/instagram.svg"
            alt="instagram"
            width={24}
            height={24}
          />
        </li>
        <li>
          <Image
            src="/assets/icons/linkedin.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
        </li>
        <li>
          <Image
            src="/assets/icons/youtube.svg"
            alt="youtube"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
}
