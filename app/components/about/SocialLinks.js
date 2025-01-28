import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex justify-end mt-16">
      <ul className="flex items-center space-x-6 text-gray-700">
        <li>
          <Image
            src="/assets/icons/facebook.png"
            alt="Group"
            width={24}
            height={24}
          />
        </li>
        <li>
          <Image
            src="/assets/icons/instagram.png"
            alt="instagram"
            width={24}
            height={24}
          />
        </li>
        <li>
          <Image
            src="/assets/icons/linkedin.png"
            alt="linkedin"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
}
