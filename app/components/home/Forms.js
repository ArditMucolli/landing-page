import Image from "next/image";

export default function Forms() {
  return (
    <div className="flex gap-8 items-center justify-center text-xl font-semibold mt-12">
      <ul className="flex gap-x-2.5 justify-start space-x-6">
        <li className="w-[319px] h-[50px] text-[16px] rounded-3xl flex items-center justify-center gap-[10px] bg-white text-[#1D1D1F]">
          Vereinbaren Sie einen Termin
          <Image
            src="/assets/forms/Vector.svg"
            alt="Vector"
            width={18}
            height={18.5}
          />
        </li>
        <li className="w-[319px] h-[50px] text-[16px] rounded-3xl flex items-center justify-center gap-[10px] bg-white text-[#1D1D1F]">
          Lead Form
          <Image
            src="/assets/forms/Layer_2.svg"
            alt="Layer_2"
            width={24}
            height={24}
          />
        </li>
        <li className="w-[319px] h-[50px] text-[16px] rounded-3xl flex items-center justify-center gap-[10px] bg-white text-[#1D1D1F]">
          5 minutes evaluation
          <Image
            src="/assets/forms/Capa_1.svg"
            alt="Appointment"
            width={21.51}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
}
