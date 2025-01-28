import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-10 max-w-[1066px] mx-auto">
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-[28px]">Galerie</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <Image
          src="/assets/gallery/Frame1.png"
          alt="Image 1"
          width={350}
          height={250}
          className="object-cover rounded-lg"
        />
        <Image
          src="/assets/gallery/Frame2.png"
          alt="Image 2"
          width={350}
          height={250}
          className="object-cover rounded-lg"
        />
        <Image
          src="/assets/gallery/Frame3.png"
          alt="Image 3"
          width={350}
          height={250}
          className="object-cover rounded-lg"
        />
        <Image
          src="/assets/gallery/Frame4.png"
          alt="Image 4"
          width={350}
          height={250}
          className="object-cover rounded-lg"
        />
        <Image
          src="/assets/gallery/Frame5.png"
          alt="Image 5"
          width={350}
          height={250}
          className="object-cover rounded-lg"
        />
        <Image
          src="/assets/gallery/Frame6.png"
          alt="Image 6"
          width={350}
          height={250}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-center mt-10">
        <button className="w-[158px] h-[50px] text-[rgba(29, 29, 31, 1)] bg-transparent border-2 border-black rounded-full">
          Show More...
        </button>
      </div>
    </div>
  );
}
