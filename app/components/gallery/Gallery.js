import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-10 max-w-[1066px] mx-auto">
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-[28px] text-[#1D1D1F] dark:text-[#FFFFFF]">
          Galerie
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <div className="w-full h-[250px]">
          <Image
            src="/assets/gallery/Frame1.svg"
            alt="Image 1"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-[250px]">
          <Image
            src="/assets/gallery/Frame2.svg"
            alt="Image 2"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-[250px]">
          <Image
            src="/assets/gallery/Frame3.svg"
            alt="Image 3"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="w-full h-[250px] mt-16">
          <Image
            src="/assets/gallery/Frame4.svg"
            alt="Image 4"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-[250px]  mt-56">
          <Image
            src="/assets/gallery/Frame5.svg"
            alt="Image 5"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-[250px]  mt-16 ">
          <Image
            src="/assets/gallery/Frame6.svg"
            alt="Image 6"
            width={350}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <button className="w-[158px] h-[50px] text-[rgba(29, 29, 31, 1)] bg-transparent border-2 border-black rounded-full dark:border-[#FFFFFF]">
          Show More...
        </button>
      </div>
    </div>
  );
}
