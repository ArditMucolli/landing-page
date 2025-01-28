import Image from "next/image";

export default function LanguageButton() {
  return (
    <button
      type="button"
      className="w-[101px] h-[40px] rounded-3xl inline-flex items-center justify-center border border-[#1D1D1F] px-4 py-2 text-sm font-medium text-gray-700 "
    >
      <Image
        src="/assets/UK.png"
        alt="UK Flag"
        width={16}
        height={16}
        className="mr-2"
      />
      <p className="text-[14px]">ENG</p>

      <Image
        src="/assets/icon.png"
        alt="icon"
        width={14}
        height={14}
        className="ml-3"
      />
    </button>
  );
}
